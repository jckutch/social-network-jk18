const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


const userController = {
    getUsers(req, res) {
      User.find()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(500).json(err));
      },
      
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('friends')
      .populate('thoughts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.status(200).json(user)
      )
      .catch((err) => res.status(500).json(err));
      },

    createUser(req, res) {
      User.create(req.body)
      .then((user) => res.status(200).json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
      },

    updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.status(200).json(user)
        )
        .catch((err) => res.status(500).json(err));
      },

    delteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.status(200).json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
      },

    addFriend(req, res) {
      },

    removeFriend(req, res) {
      },
};

module.exports = userController;
