const { Table, Entity, DocumentClient } = require("@pointblankdev/dynamite");
const ULID = require("ulid");
require("dotenv").config();

const { Table, Entity, DocumentClient } = require("@pointblankdev/dynamite");
const ULID = require("ulid");
require("dotenv").config();
// Instantiate a table
const PostsTable = new Table({
  // above is a constant to be modified depending on the service being developed.
  // Specify table name below (used by DynamoDB)
  name: "gather-posts",
  // Define partition and sort keys
  partitionKey: "PK",
  sortKey: "SK",
  // Add the DocumentClient
  DocumentClient: new DocumentClient(),
});

//DEFINE ENTITIES.
//entities are more like the table fields, hence, you can have as many as possible.
// N.B: All that matters is that they are all attached to a particular table, which in this case is PostsTable.

//When defining entities, you can decide to create individual ts files for them and export them. That still works.
//as at when compiling this, a good case is the one in tournaments.

export const Post = new Entity({
  // Specify entity name
  name: "Post",
  // Define attributes
  attributes: {
    PK: {
      partitionKey: true,
      prefix: "POST#",
      default: (data) => data.id || ULID.ulid(),
    },
    SK: { sortKey: true, default: "INFO" },
    id: { save: false },
    tournament_id: "string", // this needs my attention
  },
  // Assign it to our table
  table: PostsTable,
});

export const Player = new Entity({
  // Specify entity name
  name: "Player",
  // Define attributes
  attributes: {
    PK: {
      partitionKey: true,
      prefix: "POST#",
      default: (data) => data.id || ULID.ulid(),
    },
    SK: { sortKey: true, default: (data) => `POST#${data.player_id}` },
    id: { save: false },
    player_id: { save: false },
  },
  // Assign it to our table
  table: PostsTable,
});

export const listPosts = async (id) => {
  try {
    const { Items } = await Post.query(`POST#`);
    console.log(Items);
    Items.id = Items.PK;
    return Items;
  } catch (error) {
    return error;
  }
};

export const getPost = async (id) => {
  try {
    const { Items } = await Post.query(`POST#${id}`, { beginsWith: "INFO" });
    console.log(Items);
    const Item = Items[0]; // DIRTY
    Item.id = Item.PK;
    return Item;
  } catch (error) {
    return error;
  }
};

export const deletePost = async (id) => {
  try {
    const deleted = await Post.delete(`post#${id}`);

    if (!deleted) return `Post ${id} does not exist`;

    return `Post ${id} was deleted`;
  } catch (error) {
    return error;
  }
};

export const updatePost = async (id, postInput) => {
  try {
    const { Attributes } = await Post.update(
      { id, ...postInput.post },
      { returnValues: "all_new" }
    );
    console.log(Attributes);
    Attributes.id = Attributes.PK;
    return Attributes;
  } catch (error) {
    return error;
  }
};

export const createPost = async (postInput) => {
  try {
    const newPost = await Post.put(postInput.post);
    if (!newPost) return `post not created`;

    return `Post was created`;
  } catch (error) {
    return error;
  }
};

module.exports = {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
