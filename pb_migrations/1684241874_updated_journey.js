migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgwtahmi",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgwtahmi",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
