module.exports = {
  note: async (_, args, { models }) => {
    const note = await models.Note.findById(args.id);
    return note;
  },
  notes: async (_, __, { models }) => {
    const notes = await models.Note.find();
    return notes;
  },
};
