migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g9clti8e",
    "name": "duration",
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
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c")

  // remove
  collection.schema.removeField("g9clti8e")

  return dao.saveCollection(collection)
})
