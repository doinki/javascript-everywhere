const mongoose = require('mongoose');

const noteScheme = new mongoose.Schema(
  {
    author: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model('Note', noteScheme);

module.exports = Note;
