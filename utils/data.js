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
    "thoughtText": "This is a fun thought by Jim",
    "username": "Jim Smith",
    "createdAt": "2023-03-20T09:09:17.076+00:00",
    "reactions": [
      {
        "reactionBody": "This is a serious reaction by test",
        "username": "test",
        "reactionId": "638083c9417ed0ed80903d82",
        "createdAt": "2023-03-20T09:09:17.076+00:00",
      }
    ],
    "__v": 0
  },
  {
    "thoughtText": "This is a challenging thought by test",
    "username": "test",
    "createdAt": "2023-03-20T09:09:17.076+00:00",
    "reactions": [
      {
        "reactionBody": "This is a clever reaction by Jim",
        "username": "Jim Smith",
        "reactionId": "6380840e417ed0ed80903d8a",
        "createdAt": "2023-03-20T09:09:17.076+00:00",
      }
    ],
    "__v": 0
  }
];

module.exports = { users, thoughts };
