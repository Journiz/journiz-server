migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vong826b",
    "name": "hat",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "crown",
        "headset",
        "party",
        "bucket"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vong826b",
    "name": "hat",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "crown",
        "headset"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
