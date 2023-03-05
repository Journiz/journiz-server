migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "inw4nkgy",
    "name": "safeZone",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "inw4nkgy",
    "name": "safezone",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
