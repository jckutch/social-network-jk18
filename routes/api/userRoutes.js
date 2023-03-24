const router = require('express').Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
  
} = require('../../controllers/studentController');

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends')
  .post(addFriend);

router.route('/:userId/friends/:friendId')
  .delete(removeFriend);

module.exports = router;
