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

		collection, err := dao.FindCollectionByNameOrId("q6s1b17f3t0p53c")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("bdi26kac")

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("q6s1b17f3t0p53c")
		if err != nil {
			return err
		}

		// add
		del_teams := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "bdi26kac",
			"name": "teams",
			"type": "relation",
			"required": false,
			"unique": false,
			"options": {
				"collectionId": "jkgtmw4v3zzy2ed",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": null,
				"displayFields": []
			}
		}`), del_teams)
		collection.Schema.AddField(del_teams)

		return dao.SaveCollection(collection)
	})
}
