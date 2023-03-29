package hooks

import (
	"crypto/rand"
	"fmt"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"math/big"
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
}
