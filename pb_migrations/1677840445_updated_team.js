migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // remove
  collection.schema.removeField("velap5dg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4kzfqvne",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t6gaxrkw",
    "name": "score",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aso9ffxg",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmiezbr5",
    "name": "members",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "velap5dg",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("4kzfqvne")

  // remove
  collection.schema.removeField("t6gaxrkw")

  // remove
  collection.schema.removeField("aso9ffxg")

  // remove
  collection.schema.removeField("tmiezbr5")

  return dao.saveCollection(collection)
})
