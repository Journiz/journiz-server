migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2a3hgx45",
    "name": "hasScoreBeenAdded",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // remove
  collection.schema.removeField("2a3hgx45")

  return dao.saveCollection(collection)
})
