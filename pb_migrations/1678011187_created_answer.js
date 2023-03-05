migrate((db) => {
  const collection = new Collection({
    "id": "0n92g40oyzqmg4p",
    "created": "2023-03-05 10:13:07.249Z",
    "updated": "2023-03-05 10:13:07.249Z",
    "name": "answer",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ttqdvujg",
        "name": "point",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "x5qckklqadwyz2k",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "fnu4lsla",
        "name": "team",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "jkgtmw4v3zzy2ed",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "5dkodbdu",
        "name": "answerdata",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ofof1r3x",
        "name": "answermedia",
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
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p");

  return dao.deleteCollection(collection);
})
