migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g2ohjtcl",
    "name": "points",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "x5qckklqadwyz2k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g2ohjtcl",
    "name": "points",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "x5qckklqadwyz2k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
