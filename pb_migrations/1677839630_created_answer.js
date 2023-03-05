migrate((db) => {
  const collection = new Collection({
    "id": "0n92g40oyzqmg4p",
    "created": "2023-03-03 10:33:50.153Z",
    "updated": "2023-03-03 10:33:50.153Z",
    "name": "answer",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8xbptfej",
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
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p");

  return dao.deleteCollection(collection);
})
