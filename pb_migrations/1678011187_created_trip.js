migrate((db) => {
  const collection = new Collection({
    "id": "q6s1b17f3t0p53c",
    "created": "2023-03-05 10:13:07.249Z",
    "updated": "2023-03-05 10:13:07.249Z",
    "name": "trip",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j3bsmplr",
        "name": "date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "ygtd5mju",
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
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c");

  return dao.deleteCollection(collection);
})
