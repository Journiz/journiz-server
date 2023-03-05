migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hmbcvhwm",
    "name": "journey",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "0s8o69pg0aimu6b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("hmbcvhwm")

  return dao.saveCollection(collection)
})
