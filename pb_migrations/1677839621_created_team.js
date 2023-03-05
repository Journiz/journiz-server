migrate((db) => {
  const collection = new Collection({
    "id": "jkgtmw4v3zzy2ed",
    "created": "2023-03-03 10:33:41.090Z",
    "updated": "2023-03-03 10:33:41.090Z",
    "name": "team",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "velap5dg",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed");

  return dao.deleteCollection(collection);
})
