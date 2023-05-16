migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // remove
  collection.schema.removeField("vong826b")

  return dao.saveCollection(collection)
})
