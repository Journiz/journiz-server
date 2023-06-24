package hooks

import (
	"crypto/rand"
	"fmt"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/daos"
	"github.com/pocketbase/pocketbase/models"
	"journiz-server/src/notifications"
	"math/big"
	"time"
)

func tripHooks(app pocketbase.PocketBase) {
	app.OnRecordBeforeCreateRequest().Add(func(e *core.RecordCreateEvent) error {
		if e.Record.Collection().Name == "trip" {
			var shortId string
			var recordsNum = 0

			for ok := true; ok; ok = recordsNum > 0 {
				nBig, err := rand.Int(rand.Reader, big.NewInt(10000))
				if err != nil {
					panic(err)
				}
				n := nBig.Int64()
				shortId = fmt.Sprintf("%04d", n)
				records, err := app.Dao().FindRecordsByExpr("trip", dbx.HashExp{"shortId": shortId})
				if err != nil {
					println("Error while defining shortId: ", err.Error())
				}
				recordsNum = len(records)
			}
			e.Record.Set("shortId", shortId)
		}
		return nil
	})

	app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
		if e.Record.Collection().Name == "trip" {
			err := app.Dao().RunInTransaction(func(txDao *daos.Dao) error {
				journey, err := txDao.FindRecordById("journey", e.Record.GetString("journey"))
				if err != nil || journey == nil {
					return err
				}

				collection, err := txDao.FindCollectionByNameOrId("conversation")
				if err != nil {
					return err
				}
				record := models.NewRecord(collection)
				record.Set("user", journey.GetString("user"))
				record.Set("trip", e.Record.Id)
				record.Set("isBroadcast", true)
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

	app.OnRecordBeforeUpdateRequest().Add(func(e *core.RecordUpdateEvent) error {
		if e.Record.Collection().Name == "trip" {
			return app.Dao().RunInTransaction(func(txDao *daos.Dao) error {
				currentRecord, err := txDao.FindRecordById("trip", e.Record.Id)
				if err != nil {
					return err
				}
				previousStatus := currentRecord.GetString("status")
				newStatus := e.Record.GetString("status")
				if previousStatus != newStatus {
					teams, err := txDao.FindRecordsByExpr("team", dbx.HashExp{"trip": e.Record.Id})
					if err != nil {
						return err
					}
					if newStatus == "playing" {
						// Update trip start time, to have a correct timer
						e.Record.Set("date", time.Now())

						// Notify each team that the trip is starting
						for _, team := range teams {
							notifications.NotifyUser(team.Id, "C'est parti !", "La partie démarre, que les meilleurs gagnent !",
								map[string]string{"event": "tripStarted"})
						}
					}
					if newStatus == "finishing" {
						// Notify each team that the trip is finishing
						for _, team := range teams {
							notifications.NotifyUser(team.Id, "C'est fini !", "La partie est terminée, retournez au point de ralliement !",
								map[string]string{"event": "tripFinished"})
						}

						// Notify user that the trip is finishing
						journey, err := txDao.FindRecordById("journey", e.Record.GetString("journey"))
						if err != nil {
							return err
						}

						notifications.NotifyUser(journey.GetString("user"), "C'est fini !", "La partie est terminée, les équipes rentrent au point de ralliement !",
							map[string]string{"event": "userTripFinished"})
					}
				}

				return nil
			})
		}
		return nil
	})
}
