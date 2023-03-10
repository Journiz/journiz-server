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

		// remove
		collection.Schema.RemoveField("4kzfqvne")

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("jkgtmw4v3zzy2ed")
		if err != nil {
			return err
		}

		// add
		del_journey := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "4kzfqvne",
			"name": "journey",
			"type": "relation",
			"required": true,
			"unique": false,
			"options": {
				"collectionId": "0s8o69pg0aimu6b",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": 1,
				"displayFields": []
			}
		}`), del_journey)
		collection.Schema.AddField(del_journey)

		return dao.SaveCollection(collection)
	})
}
