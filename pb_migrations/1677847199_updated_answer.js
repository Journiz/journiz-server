migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnu4lsla",
    "name": "team",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "jkgtmw4v3zzy2ed",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dkodbdu",
    "name": "answerdata",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ofof1r3x",
    "name": "answermedia",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // remove
  collection.schema.removeField("fnu4lsla")

  // remove
  collection.schema.removeField("5dkodbdu")

  // remove
  collection.schema.removeField("ofof1r3x")

  return dao.saveCollection(collection)
})
