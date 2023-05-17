migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hq4iu7j2bxgcxnf")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("ofh5ecox")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "paufvsfk",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hq4iu7j2bxgcxnf")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("paufvsfk")

  return dao.saveCollection(collection)
})
