migrate((db) => {
  const collection = new Collection({
    "id": "2t6inczltmplhcl",
    "created": "2023-03-24 12:30:02.230Z",
    "updated": "2023-03-24 12:30:02.230Z",
    "name": "message",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bagxz2xg",
        "name": "conversation",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "xi1xwl7f88iqb66",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "dlqeoumu",
        "name": "read",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "utyk2tmq",
        "name": "direction",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "teamToUser",
            "userToTeam"
          ]
        }
      },
      {
        "system": false,
        "id": "xiqp9nrv",
        "name": "content",
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
        "id": "hkxo426e",
        "name": "attachement",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("2t6inczltmplhcl");

  return dao.deleteCollection(collection);
})
