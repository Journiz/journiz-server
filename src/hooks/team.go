package hooks

import (
	"encoding/json"
	"fmt"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/daos"
	"github.com/pocketbase/pocketbase/models"
	"journiz-server/src/maps"
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

	// On team update
	app.OnRecordBeforeUpdateRequest().Add(func(e *core.RecordUpdateEvent) error {
		if e.Record.Collection().Name == "team" {
			err := app.Dao().RunInTransaction(func(txDao *daos.Dao) error {
				prevTeam, err := txDao.FindRecordById("team", e.Record.Id)
				if err != nil {
					return err
				}
				if prevTeam.GetFloat("latitude") == e.Record.GetFloat("latitude") && prevTeam.GetFloat("longitude") == e.Record.GetFloat("longitude") {
					return nil
				}

				trip, err := txDao.FindRecordById("trip", e.Record.GetString("trip"))
				if err != nil || trip == nil {
					return err
				}
				journey, err := txDao.FindRecordById("journey", trip.GetString("journey"))
				if err != nil || journey == nil {
					return err
				}

				safeZoneJson := journey.GetString("safeZone")
				var safeZone [][]float64
				json.Unmarshal([]byte(safeZoneJson), &safeZone)

				teamLng := e.Record.GetFloat("longitude")
				teamLat := e.Record.GetFloat("latitude")
				teamPoint := []float64{teamLng, teamLat}

				isInside := maps.PointInPolygon(teamPoint, safeZone)
				fmt.Println("isInside", isInside)
				if !isInside && !prevTeam.GetBool("isOutside") {
					e.Record.Set("isOutside", true)
				}
				if isInside && prevTeam.GetBool("isOutside") {
					e.Record.Set("isOutside", false)
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
