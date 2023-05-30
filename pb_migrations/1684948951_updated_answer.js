migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // remove
  collection.schema.removeField("5dkodbdu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzb3mjui",
    "name": "answerData",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0n92g40oyzqmg4p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dkodbdu",
    "name": "answerData",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("pzb3mjui")

  return dao.saveCollection(collection)
})
