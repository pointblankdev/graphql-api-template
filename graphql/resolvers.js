const { listPosts, getPost, createPost, updatePost, deletePost } = require("../lib/Posts");

const resolvers = {
  Query: {
    listPosts,
    getPost,
  },
  Mutation: {
    createPost,
    updatePost,
    deletePost,
  },
};

module.exports = resolvers;
