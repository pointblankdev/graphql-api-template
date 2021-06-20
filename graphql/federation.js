const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

module.exports = buildFederatedSchema([{ typeDefs, resolvers }]);
