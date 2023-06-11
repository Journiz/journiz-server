migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbysgfmo",
    "name": "answerType",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "image",
        "text",
        "choice",
        "location",
        "audio"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbysgfmo",
    "name": "answerType",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "image",
        "text",
        "choice",
        "location"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
