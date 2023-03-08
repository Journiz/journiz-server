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
		new_latitude := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "fecsgxug",
			"name": "latitude",
			"type": "number",
			"required": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null
			}
		}`), new_latitude)
		collection.Schema.AddField(new_latitude)

		// add
		new_longitude := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "1gpi09m4",
			"name": "longitude",
			"type": "number",
			"required": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null
			}
		}`), new_longitude)
		collection.Schema.AddField(new_longitude)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("jkgtmw4v3zzy2ed")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("fecsgxug")

		// remove
		collection.Schema.RemoveField("1gpi09m4")

		return dao.SaveCollection(collection)
	})
}
