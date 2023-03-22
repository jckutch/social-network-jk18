const { Schema, model } = require('mongoose');
const reactionSchema = new Schema('/Reaction');

const thoughtSchema = new Schema(
  {
    thoughtID: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
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
