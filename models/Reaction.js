const { Schema, Types } = require('mongoose');
const { formatDate } = require('../utils/helpers');

const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 500,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return formatDate(date)
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
