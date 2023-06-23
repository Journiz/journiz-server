migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovdeotwf",
    "name": "hasSafeZone",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // remove
  collection.schema.removeField("ovdeotwf")

  return dao.saveCollection(collection)
})
