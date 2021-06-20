const { Dynamite } = require("@pointblankdev/dynamite");

const dynamite = new Dynamite();

const listPosts = async (src, args, ctx) => dynamite.Σ();
const getPost = async (src, args, ctx) => dynamite.Δ(args.id);
const createPost = (src, args, ctx) => dynamite.Ξ(args);
const updatePost = (src, args, ctx) => dynamite.Ω(args.id, args);
const deletePost = (src, args, ctx) => dynamite.Γ(args.id);

module.exports = {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
