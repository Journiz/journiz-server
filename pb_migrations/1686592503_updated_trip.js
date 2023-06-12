migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lj4tzu7y",
    "name": "status",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pairing",
        "playing",
        "finishing",
        "finished"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lj4tzu7y",
    "name": "status",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pairing",
        "playing",
        "finished"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
