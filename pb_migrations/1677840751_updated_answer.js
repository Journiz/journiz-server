migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // remove
  collection.schema.removeField("8xbptfej")

  // add
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xbptfej",
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
  collection.schema.removeField("ttqdvujg")

  return dao.saveCollection(collection)
})
