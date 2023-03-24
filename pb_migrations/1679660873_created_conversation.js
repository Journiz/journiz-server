migrate((db) => {
  const collection = new Collection({
    "id": "xi1xwl7f88iqb66",
    "created": "2023-03-24 12:27:53.041Z",
    "updated": "2023-03-24 12:27:53.041Z",
    "name": "conversation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d4t386qg",
        "name": "trip",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "q6s1b17f3t0p53c",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ykplncxr",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "3abna0po",
        "name": "team",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "jkgtmw4v3zzy2ed",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
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
  const collection = dao.findCollectionByNameOrId("xi1xwl7f88iqb66");

  return dao.deleteCollection(collection);
})
