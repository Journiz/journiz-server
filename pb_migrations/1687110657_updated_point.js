migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbn0inco",
    "name": "fallbackMedia",
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
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // remove
  collection.schema.removeField("tbn0inco")

  return dao.saveCollection(collection)
})
