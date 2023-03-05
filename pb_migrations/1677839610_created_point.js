migrate((db) => {
  const collection = new Collection({
    "id": "x5qckklqadwyz2k",
    "created": "2023-03-03 10:33:30.070Z",
    "updated": "2023-03-03 10:33:30.070Z",
    "name": "point",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xbaiffo8",
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
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k");

  return dao.deleteCollection(collection);
})
