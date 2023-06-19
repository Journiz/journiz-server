migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xi1xwl7f88iqb66")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hf3m3pnt",
    "name": "isBroadcast",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xi1xwl7f88iqb66")

  // remove
  collection.schema.removeField("hf3m3pnt")

  return dao.saveCollection(collection)
})
