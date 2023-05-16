migrate((db) => {
  const collection = new Collection({
    "id": "hq4iu7j2bxgcxnf",
    "created": "2023-05-16 14:20:00.220Z",
    "updated": "2023-05-16 14:20:00.220Z",
    "name": "trip_to_user",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ofh5ecox",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT trip.id, users.id as user\n  FROM trip\n  INNER JOIN journey ON trip.journey = journey.id\n  INNER JOIN users ON journey.user = users.id\n;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hq4iu7j2bxgcxnf");

  return dao.deleteCollection(collection);
})
