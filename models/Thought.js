const { Schema, model } = require('mongoose');
const reactionSchema = new Schema('/Reaction');
const { formatDate } = require('../utils/helpers');

const thoughtSchema = new Schema(
  {
    thoughtID: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 1,
      },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return formatDate(date)
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema)
module.exports = Thought;
