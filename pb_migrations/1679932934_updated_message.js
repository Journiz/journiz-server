migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6inczltmplhcl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hkxo426e",
    "name": "attachment",
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
  const collection = dao.findCollectionByNameOrId("2t6inczltmplhcl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hkxo426e",
    "name": "attachement",
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
