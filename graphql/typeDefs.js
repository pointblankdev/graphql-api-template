const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  # Models
  type Post {
    id: String!
  }

  # Operations
  type Query {
    listPosts: [Post]
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(id: ID!, title: String, text: String): Post
    updatePost(id: ID!, title: String, text: String): Post
    deletePost(id: ID!): Post
  }
`;

module.exports = typeDefs;
