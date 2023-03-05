migrate((db) => {
  const collection = new Collection({
    "id": "jkgtmw4v3zzy2ed",
    "created": "2023-03-05 10:13:07.249Z",
    "updated": "2023-03-05 10:13:07.249Z",
    "name": "team",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4kzfqvne",
        "name": "journey",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "0s8o69pg0aimu6b",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "t6gaxrkw",
        "name": "score",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "aso9ffxg",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tmiezbr5",
        "name": "members",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed");

  return dao.deleteCollection(collection);
})
