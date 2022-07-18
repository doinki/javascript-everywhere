const { GraphQLDateTime } = require('graphql-iso-date');
const Query = require('./query');
const Mutation = require('./mutation');

module.exports = {
  DateTime: GraphQLDateTime,
  Mutation,
  Query,
};
