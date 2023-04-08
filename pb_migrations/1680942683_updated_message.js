migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6inczltmplhcl")

  // remove
  collection.schema.removeField("utyk2tmq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wckocbwc",
    "name": "sender",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "team",
        "user"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6inczltmplhcl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "utyk2tmq",
    "name": "direction",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "teamToUser",
        "userToTeam"
      ]
    }
  }))

  // remove
  collection.schema.removeField("wckocbwc")

  return dao.saveCollection(collection)
})
