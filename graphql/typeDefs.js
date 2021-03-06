const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  # Models
  type Post {
    id: ID!
    title: String
    text: String
  }

  # Operations
  type Query {
    listPosts: [Post]
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(title: String, text: String): String
    updatePost(id: ID!, title: String, text: String): String
    deletePost(id: ID!): String
  }
`;

module.exports = typeDefs;
