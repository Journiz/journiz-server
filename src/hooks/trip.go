package hooks

import (
	"crypto/rand"
	"fmt"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/daos"
	"github.com/pocketbase/pocketbase/models"
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
			currentRecord, err := app.Dao().FindRecordById("trip", e.Record.Id)
			if err != nil {
				return err
			}
			previousStatus := currentRecord.GetString("status")
			newStatus := e.Record.GetString("status")
			if previousStatus != newStatus && newStatus == "playing" {
				e.Record.Set("date", time.Now())
			}
		}
		return nil
	})
}
