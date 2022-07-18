const mongoose = require('mongoose');

const noteScheme = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Note = mongoose.model('Note', noteScheme);

module.exports = Note;
