module.exports = {
  deleteNote: async (_, { id }, { models }) => {
    try {
      await models.Note.findOneAndRemove({ _id: id });
      return true;
    } catch (err) {
      return false;
    }
  },
  newNote: async (_, args, { models }) => {
    const newNote = await models.Note.create({
      author: 'Adam Scott',
      content: args.content,
    });
    return newNote;
  },
  updateNote: async (_, { content, id }, { models }) => {
    const updatedNote = await models.Note.findOneAndUpdate(
      { _id: id },
      { $set: { content } },
      { new: true }
    );
    return updatedNote;
  },
};
