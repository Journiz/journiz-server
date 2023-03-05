migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // remove
  collection.schema.removeField("iqgsp9ve")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrbbylgn",
    "name": "basecampName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgwtahmi",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efbcay1y",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 32,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqgsp9ve",
    "name": "basecampName",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("lrbbylgn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgwtahmi",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efbcay1y",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 32,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
