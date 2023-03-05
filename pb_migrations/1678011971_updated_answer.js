migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ttqdvujg",
    "name": "point",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "x5qckklqadwyz2k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnu4lsla",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dkodbdu",
    "name": "answerData",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ofof1r3x",
    "name": "answerMedia",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ttqdvujg",
    "name": "point",
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

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dkodbdu",
    "name": "answerdata",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
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
})
