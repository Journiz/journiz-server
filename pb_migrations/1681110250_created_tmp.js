migrate((db) => {
  const collection = new Collection({
    "id": "g36wrij7m49j24p",
    "created": "2023-04-10 07:04:10.258Z",
    "updated": "2023-04-10 07:04:10.258Z",
    "name": "tmp",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM users;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p");

  return dao.deleteCollection(collection);
})
