migrate((db) => {
  const collection = new Collection({
    "id": "0s8o69pg0aimu6b",
    "created": "2023-03-05 10:13:07.243Z",
    "updated": "2023-03-05 10:13:07.243Z",
    "name": "journey",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cgwtahmi",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      },
      {
        "system": false,
        "id": "iqgsp9ve",
        "name": "basecamp",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "vbsqtlcr",
        "name": "indoor",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "efbcay1y",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 32,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nfohtkpu",
        "name": "tags",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "y4cf4xsk",
        "name": "longitude",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "pydmgbms",
        "name": "latitude",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "x7habjic",
        "name": "duration",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "inw4nkgy",
        "name": "safezone",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "g2ohjtcl",
        "name": "points",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "x5qckklqadwyz2k",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": [
            "id"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0s8o69pg0aimu6b");

  return dao.deleteCollection(collection);
})
