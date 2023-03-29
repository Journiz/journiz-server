migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mindetyb",
    "name": "shortId",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 4,
      "max": 4,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c")

  // remove
  collection.schema.removeField("mindetyb")

  return dao.saveCollection(collection)
})
