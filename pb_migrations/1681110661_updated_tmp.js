migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.options = {
    "query": "SELECT team.id, users.id as user\n  FROM team\n  INNER JOIN trip ON team.trip = trip.id\n  INNER JOIN journey ON trip.journey = journey.id\n  INNER JOIN users ON journey.user = users.id\n;"
  }

  // remove
  collection.schema.removeField("shbdsgwg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzfcx2vg",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
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
    "query": "SELECT team.id, trip.id as trip\n  FROM team\n  INNER JOIN trip ON team.trip = trip.id\n;"
  }

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

  // remove
  collection.schema.removeField("jzfcx2vg")

  return dao.saveCollection(collection)
})
