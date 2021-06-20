require("dotenv").config();
const { ApolloServer } = require("apollo-server-lambda");
const { ApolloServer: ApolloServerLocal } = require("apollo-server");
const schema = require("./graphql/federation");
const { verify } = require("@pointblankdev/lambda-auth");

const environment = process.env.ENV;

if (environment === "local") {
  // Local development
  const server = new ApolloServerLocal({ schema });
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
} else {
  // AWS Lambda
  const server = new ApolloServer({
    schema,
    context: ({ event, context }) => ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
      user: verify(event.headers.Authorization),
    }),
    playground: {
      endpoint: `/${environment}/graphql`,
    },
    introspection: true,
  });
  exports.handler = server.createHandler({
    cors: {
      origin: "*",
      credentials: false,
    },
  });
}
