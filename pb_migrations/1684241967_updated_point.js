migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "27fxto4s",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // remove
  collection.schema.removeField("27fxto4s")

  return dao.saveCollection(collection)
})
