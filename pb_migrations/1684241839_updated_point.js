migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eygxcbga",
    "name": "trigger",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "x5qckklqadwyz2k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
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
    "id": "eygxcbga",
    "name": "trigger",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "x5qckklqadwyz2k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
