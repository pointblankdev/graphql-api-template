const {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("./Post");

describe("Posts", () => {
  it("should list all posts", async () => {
    const posts = await listPosts();
    console.log(posts);
  });
});
