migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.options = {
    "query": "SELECT team.id, trip.name\n  FROM team\n  INNER JOIN trip ON team.trip = trip.id\n;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xunejbuk",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.options = {
    "query": "SELECT team.id\n  FROM team\n  INNER JOIN trip ON team.trip = trip.id\n;"
  }

  // remove
  collection.schema.removeField("xunejbuk")

  return dao.saveCollection(collection)
})
