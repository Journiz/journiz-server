migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.options = {
    "query": "SELECT team.id\n  FROM team\n  INNER JOIN trip ON team.trip = trip.id\n;"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g36wrij7m49j24p")

  collection.options = {
    "query": "SELECT team.id FROM team;"
  }

  return dao.saveCollection(collection)
})
