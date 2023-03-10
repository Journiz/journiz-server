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

		collection, err := dao.FindCollectionByNameOrId("jkgtmw4v3zzy2ed")
		if err != nil {
			return err
		}

		// add
		new_trip := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "ndyx6xty",
			"name": "trip",
			"type": "relation",
			"required": false,
			"unique": false,
			"options": {
				"collectionId": "q6s1b17f3t0p53c",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": 1,
				"displayFields": []
			}
		}`), new_trip)
		collection.Schema.AddField(new_trip)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("jkgtmw4v3zzy2ed")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("ndyx6xty")

		return dao.SaveCollection(collection)
	})
}
