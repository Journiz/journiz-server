package hooks

import (
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/daos"
	"journiz-server/src/notifications"
)

func messageHooks(app pocketbase.PocketBase) {
	app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
		if e.Record.Collection().Name == "message" {
			err := app.Dao().RunInTransaction(func(txDao *daos.Dao) error {

				conversation, err := txDao.FindRecordById("conversation", e.Record.GetString("conversation"))
				if err != nil {
					return err
				}

				var userToNotify string
				var senderName string
				if e.Record.GetString("sender") == "team" {
					userToNotify = conversation.GetString("user")
					team, err := txDao.FindRecordById("team", conversation.GetString("team"))
					if err != nil {
						return err
					}
					senderName = team.GetString("name")
				} else {
					userToNotify = conversation.GetString("team")
					user, err := txDao.FindRecordById("user", conversation.GetString("user"))
					if err != nil {
						return err
					}
					senderName = user.GetString("username")
				}
				notifications.NotifyUser(userToNotify,
					"Nouveau message de "+senderName,
					e.Record.GetString("content"),
					map[string]string{"event": "chatMessage", "conversation": conversation.Id},
				)

				return nil
			})
			if err != nil {
				return err
			}
		}
		return nil
	})
}
