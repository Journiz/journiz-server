migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.options = {
    "query": "SELECT team.id, trip.id as trip\n  FROM team\n  INNER JOIN trip ON team.trip = trip.id\n;"
  }

  // remove
  collection.schema.removeField("xunejbuk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "shbdsgwg",
    "name": "trip",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "q6s1b17f3t0p53c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("shbdsgwg")

  return dao.saveCollection(collection)
})
