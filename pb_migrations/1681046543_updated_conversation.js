migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xi1xwl7f88iqb66")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d4t386qg",
    "name": "trip",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "q6s1b17f3t0p53c",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3abna0po",
    "name": "team",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "jkgtmw4v3zzy2ed",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xi1xwl7f88iqb66")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d4t386qg",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3abna0po",
    "name": "team",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "jkgtmw4v3zzy2ed",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
