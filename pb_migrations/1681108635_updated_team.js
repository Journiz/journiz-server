migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ndyx6xty",
    "name": "trip",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "q6s1b17f3t0p53c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ndyx6xty",
    "name": "trip",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "q6s1b17f3t0p53c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
