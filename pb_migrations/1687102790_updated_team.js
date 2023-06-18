migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "no7e2aph",
    "name": "isOutside",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // remove
  collection.schema.removeField("no7e2aph")

  return dao.saveCollection(collection)
})
