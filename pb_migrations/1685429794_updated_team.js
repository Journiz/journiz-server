migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vfh8f4mt",
    "name": "color",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "green",
        "yellow",
        "pink",
        "black",
        "orange",
        "red",
        "purple",
        "skyblue",
        "blue",
        "brown",
        "teal",
        "violet"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jkgtmw4v3zzy2ed")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vfh8f4mt",
    "name": "color",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "green",
        "yellow",
        "pink",
        "black",
        "orange",
        "red",
        "purple",
        "skyblue",
        "blue",
        "brown",
        "gray",
        "violet"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
