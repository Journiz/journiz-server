migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.options = {
    "query": "SELECT team.id FROM team;"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.options = {
    "query": "SELECT id FROM users;"
  }

  return dao.saveCollection(collection)
})
