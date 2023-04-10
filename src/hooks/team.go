package hooks

import (
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/daos"
	"github.com/pocketbase/pocketbase/models"
)

func teamHooks(app pocketbase.PocketBase) {
	app.OnRecordBeforeCreateRequest().Add(func(e *core.RecordCreateEvent) error {
		if e.Record.Collection().Name == "team" {

			// Data integrity for json field
			if e.Record.GetString("members") == "null" {
				e.Record.Set("members", "[]")
			}

		}
		return nil
	})

	app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
		if e.Record.Collection().Name == "team" {
			// linked conversation
			err := app.Dao().RunInTransaction(func(txDao *daos.Dao) error {
				teamToUser, err := txDao.FindRecordById("team_to_user", e.Record.Id)
				if err != nil {
					return err
				}

				collection, err := txDao.FindCollectionByNameOrId("conversation")
				if err != nil {
					return err
				}
				record := models.NewRecord(collection)
				record.Set("user", teamToUser.GetString("user"))
				record.Set("team", e.Record.Id)
				if err := txDao.SaveRecord(record); err != nil {
					return err
				}
				return nil
			})
			if err != nil {
				return err
			}
		}
		return nil
	})
}
