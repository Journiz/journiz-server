migrate((db) => {
  const collection = new Collection({
    "id": "x5qckklqadwyz2k",
    "created": "2023-03-05 10:13:07.249Z",
    "updated": "2023-03-05 10:13:07.249Z",
    "name": "point",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7jei0juu",
        "name": "journey",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "0s8o69pg0aimu6b",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      },
      {
        "system": false,
        "id": "qoa3p4hl",
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
        "id": "oehrpxqw",
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
        "id": "s4qim884",
        "name": "score",
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
        "id": "dmenh55p",
        "name": "question",
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
        "id": "eygxcbga",
        "name": "trigger",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "x5qckklqadwyz2k",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "mqajh6id",
        "name": "answer",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hbysgfmo",
        "name": "answertype",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "image"
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
  const collection = dao.findCollectionByNameOrId("x5qckklqadwyz2k");

  return dao.deleteCollection(collection);
})
