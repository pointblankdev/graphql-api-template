const {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../lib/Post");

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
