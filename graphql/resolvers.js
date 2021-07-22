import {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../lib/Posts";

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
