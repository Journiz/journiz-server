migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygtd5mju",
    "name": "journey",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "0s8o69pg0aimu6b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6s1b17f3t0p53c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygtd5mju",
    "name": "journey",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "0s8o69pg0aimu6b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
