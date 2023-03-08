package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models/schema"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("0s8o69pg0aimu6b")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("17wxecll")

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("0s8o69pg0aimu6b")
		if err != nil {
			return err
		}

		// add
		del_trips := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "17wxecll",
			"name": "trips",
			"type": "relation",
			"required": false,
			"unique": false,
			"options": {
				"collectionId": "q6s1b17f3t0p53c",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": null,
				"displayFields": []
			}
		}`), del_trips)
		collection.Schema.AddField(del_trips)

		return dao.SaveCollection(collection)
	})
}
