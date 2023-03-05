migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbysgfmo",
    "name": "answertype",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "image"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // remove
  collection.schema.removeField("hbysgfmo")

  return dao.saveCollection(collection)
})
