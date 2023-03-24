const users = [
  { 
    username: 'tester',
    email: 'email@test.com',
    thoughts: [
      {
      thoughtText: 'This is a test',
      username: 'test'
      },
    ],
  },
  {
  username: 'Jim Smith',
  email: 'jim@smith.com',
  thoughts: [
    {
      thoughtText: 'This is a Jim',
      username: 'Jim Smith'
    },
  ],

  },
];

const thoughts = [
  { 
  thoughtText: 'This is a test',
  username: 'test'
  },
  {
  thoughtText: 'This is a Jim',
  username: 'Jim Smith'
  },
];

module.exports = { users, thoughts };
