const { ApolloServer } = require("apollo-server-lambda");
const { ApolloServer: ApolloServerLocal } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: "/dev/graphql",
  },
  introspection: true,
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: false,
  },
});

// For local development
if (!process.env.AWS_REGION) {
  const serverLocal = new ApolloServerLocal({ typeDefs, resolvers });
  serverLocal.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}
