migrate((db) => {
  const snapshot = [
    {
      "id": "0s8o69pg0aimu6b",
      "created": "2023-03-05 10:13:07.243Z",
      "updated": "2023-03-10 12:17:17.575Z",
      "name": "journey",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "cgwtahmi",
          "name": "user",
          "type": "relation",
          "required": true,
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
          "id": "efbcay1y",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 1,
            "max": 32,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "lrbbylgn",
          "name": "basecampName",
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
          "id": "pydmgbms",
          "name": "basecampLatitude",
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
          "id": "y4cf4xsk",
          "name": "basecampLongitude",
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
          "id": "vbsqtlcr",
          "name": "indoor",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
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
          "id": "163f4way",
          "name": "duration",
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
          "id": "inw4nkgy",
          "name": "safeZone",
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
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "0n92g40oyzqmg4p",
      "created": "2023-03-05 10:13:07.249Z",
      "updated": "2023-03-05 10:26:11.504Z",
      "name": "answer",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ttqdvujg",
          "name": "point",
          "type": "relation",
          "required": true,
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
          "id": "fnu4lsla",
          "name": "team",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "jkgtmw4v3zzy2ed",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "5dkodbdu",
          "name": "answerData",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "ofof1r3x",
          "name": "answerMedia",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": []
          }
        },
        {
          "system": false,
          "id": "s2fc8tak",
          "name": "isCorrect",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "x5qckklqadwyz2k",
      "created": "2023-03-05 10:13:07.249Z",
      "updated": "2023-03-05 10:26:33.631Z",
      "name": "point",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "7jei0juu",
          "name": "journey",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "0s8o69pg0aimu6b",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
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
          "id": "s4qim884",
          "name": "score",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": null
          }
        },
        {
          "system": false,
          "id": "hbysgfmo",
          "name": "answerType",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "image",
              "text",
              "choice",
              "location"
            ]
          }
        },
        {
          "system": false,
          "id": "dmenh55p",
          "name": "question",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
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
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "jkgtmw4v3zzy2ed",
      "created": "2023-03-05 10:13:07.249Z",
      "updated": "2023-03-11 18:21:16.381Z",
      "name": "team",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ndyx6xty",
          "name": "trip",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "q6s1b17f3t0p53c",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "t6gaxrkw",
          "name": "score",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": null
          }
        },
        {
          "system": false,
          "id": "aso9ffxg",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "tmiezbr5",
          "name": "members",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "1jzs8lj8",
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
          "id": "ttu56o4s",
          "name": "longitude",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": "",
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "q6s1b17f3t0p53c",
      "created": "2023-03-05 10:13:07.249Z",
      "updated": "2023-03-11 17:32:08.344Z",
      "name": "trip",
      "type": "base",
      "system": false,
      "schema": [
        {
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
        },
        {
          "system": false,
          "id": "j3bsmplr",
          "name": "date",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "ygtd5mju",
          "name": "journey",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "0s8o69pg0aimu6b",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    },
    {
      "id": "_pb_users_auth_",
      "created": "2023-03-07 21:20:28.414Z",
      "updated": "2023-03-10 12:17:17.561Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null
          }
        },
        {
          "system": false,
          "id": "hmbcvhwm",
          "name": "journeys",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "0s8o69pg0aimu6b",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": []
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
