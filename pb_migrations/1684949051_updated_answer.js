migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o52fsco7",
    "name": "tmp",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // remove
  collection.schema.removeField("o52fsco7")

  return dao.saveCollection(collection)
})
