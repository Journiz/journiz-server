migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxxzpxe7",
    "name": "batteryLevel",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // remove
  collection.schema.removeField("pxxzpxe7")

  return dao.saveCollection(collection)
})
