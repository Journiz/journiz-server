migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6inczltmplhcl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bagxz2xg",
    "name": "conversation",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xi1xwl7f88iqb66",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6inczltmplhcl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bagxz2xg",
    "name": "conversation",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "xi1xwl7f88iqb66",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
