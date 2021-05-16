const resolvers = {
  Query: {
    listPosts: async () => [{ id: "1" }],
    getPost: async (_, args) => ({ id: "1" }),
  },
  Mutation: {
    createPost: (_, args) => ({ id: "1" }),
    updatePost: (_, args) => ({ id: "1" }),
    deletePost: (_, args) => ({ id: "1" }),
  },
};

module.exports = resolvers;
