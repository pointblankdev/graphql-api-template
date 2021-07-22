import {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "./Posts";

describe("Posts", () => {
  it("should list all posts", async () => {
    const posts = await listPosts();
    console.log(posts);
  });
});
