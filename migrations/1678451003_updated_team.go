package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/pocketbase/pocketbase/tools/types"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("jkgtmw4v3zzy2ed")
		if err != nil {
			return err
		}

		collection.ListRule = nil

		collection.ViewRule = nil

		collection.CreateRule = nil

		collection.UpdateRule = nil

		collection.DeleteRule = nil

		// remove
		collection.Schema.RemoveField("4kzfqvne")

		// remove
		collection.Schema.RemoveField("fecsgxug")

		// remove
		collection.Schema.RemoveField("1gpi09m4")

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("jkgtmw4v3zzy2ed")
		if err != nil {
			return err
		}

		collection.ListRule = types.Pointer("")

		collection.ViewRule = types.Pointer("")

		collection.CreateRule = types.Pointer("")

		collection.UpdateRule = types.Pointer("")

		collection.DeleteRule = types.Pointer("@request.auth.id = journey.user.id")

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

		// add
		del_latitude := &schema.SchemaField{}
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
		}`), del_latitude)
		collection.Schema.AddField(del_latitude)

		// add
		del_longitude := &schema.SchemaField{}
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
		}`), del_longitude)
		collection.Schema.AddField(del_longitude)

		return dao.SaveCollection(collection)
	})
}
