package hooks

import (
	"fmt"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/daos"
	"github.com/pocketbase/pocketbase/models"
	"journiz-server/src/notifications"
)

func notifyMessage(message *models.Record, conversation *models.Record, txDao *daos.Dao) error {

	fmt.Println("sending notification")
	var idOfUserToNotify string
	var senderName string
	if message.GetString("sender") == "team" {
		idOfUserToNotify = conversation.GetString("user")
		team, err := txDao.FindRecordById("team", conversation.GetString("team"))
		if err != nil {
			return err
		}
		senderName = team.GetString("name")
	} else {
		idOfUserToNotify = conversation.GetString("team")
		user, err := txDao.FindRecordById("users", conversation.GetString("user"))
		if err != nil {
			return err
		}
		senderName = user.GetString("username")
	}
	notifications.NotifyUser(idOfUserToNotify,
		"Nouveau message de "+senderName,
		message.GetString("content"),
		map[string]string{"event": "chatMessage", "conversation": conversation.Id},
	)
	return nil
}

func messageHooks(app pocketbase.PocketBase) {
	app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
		if e.Record.Collection().Name == "message" {
			fmt.Println("coll")
			err := app.Dao().RunInTransaction(func(txDao *daos.Dao) error {
				fmt.Println("start here")
				conversation, err := txDao.FindRecordById("conversation", e.Record.GetString("conversation"))

				if conversation.GetBool("isBroadcast") {
					conversations, err := txDao.FindRecordsByExpr("conversation", dbx.HashExp{"trip": conversation.GetString("trip")})
					if err != nil {
						return err
					}
					collection, err := txDao.FindCollectionByNameOrId("message")
					if err != nil {
						return err
					}
					fmt.Println("conversations", conversations)
					for _, conversation := range conversations {
						if conversation.GetBool("isBroadcast") {
							continue
						}
						record := models.NewRecord(collection)
						record.Set("conversation", conversation.Id)
						record.Set("sender", "user")
						record.Set("content", e.Record.GetString("content"))
						record.Set("attachment", e.Record.GetString("attachment"))
						record.Set("read", false)

						if err := txDao.SaveRecord(record); err != nil {
							return err
						}
						notifyMessage(record, conversation, txDao)
					}
					return nil
				}

				fmt.Println("endloop")
				// Send notification to user
				if err != nil {
					return err
				}
				return notifyMessage(e.Record, conversation, txDao)
			})
			if err != nil {
				return err
			}
		}
		return nil
	})
}
