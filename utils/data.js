const users = [
  { 
    "username": "test",
    "email": "email@test.com",
    "thoughts": [],
    "friends": [],
    "__v": 0
      },
  {
    "username": "Jim Smith",
    "email": "Jim@Smith.com",
    "thoughts": [],
    "friends": [],
    "__v": 0
    },
];

const thoughts = [
  { 
    "createdAt": "",
    "reactions": [
      {
        "reactionBody": "",
        "username": "",
        "reactionId": "",
        "createdAt": "",
      }
    ],
    "__v": 0
  },
  {
    "thoughtText": "",
    "username": "",
    "createdAt": "",
    "reactions": [
      {
        "reactionBody": "",
        "username": "tester",
        "reactionId": "",
        "createdAt": "",
      }
    ],
    "__v": 0
  },
];

module.exports = { users, thoughts };
