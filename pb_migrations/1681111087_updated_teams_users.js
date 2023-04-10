migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.name = "team_to_user"

  // remove
  collection.schema.removeField("afigc49f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xhotjltz",
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

  collection.name = "teams_users"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afigc49f",
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

  // remove
  collection.schema.removeField("xhotjltz")

  return dao.saveCollection(collection)
})
