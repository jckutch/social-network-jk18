const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

const thoughtController = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
    .then((thoughts) => res.status(200).json(thoughts))
    .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .select('-__v')
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.status(200).json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },

  createThought(req, res) {
  },
 
  updateThought(req, res) {
  },

  deleteThought(req, res) {
  },

  addReaction(req, res) {
  },

  removeReaction(req, res) {
  },
};

module.exports = thoughtController