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
    // SK: { sortKey: true, default: (data) => `POST#${data.id}` },
    //In the one Ross did, the default data here was simply INFO.
    //why??????????????????????????????????
    id: { save: false },
    //below, add metadata of this entity.
    //i.e. maybe postsid, time of creation, etc.
    // this is simply a type defination of the data of the entity.
    //see it like this: for each entity(or row in the table), there are some specific data that need to be there which are peculiar to the entity.
    // let's assume we're building a table for people in a family, we'd all have the same PK's(surname) but our first names would differ(SK).
    // And for each member of the family, because its typescript, we need to define the type of character each data would take.
    // for me as a guy, it might be something like "shoe size : "number", age: "number", sex: "string" ", etc.
    //if we're adopting the same for let's say my sister, we'd simply copy the same type definition and paste.
    // incase we aren't, we'd need to define the necessary for her as well.
    // therefore, all entities might have the same or differ. there are no rules that say they must have the same.
    post_id: "string", // this needs my attention
  },
  // Assign it to our table
  table: PostsTable,
});

export const Owner = new Entity({
  // Specify entity name
  name: "Owner",
  // Define attributes
  attributes: {
    PK: {
      partitionKey: true,
      prefix: "POST#",
      default: (data) => data.id || ULID.ulid(),
    },
    // notice that the PK here and the one above are the same; that's the idea-to have same PK's but different SK's which give each entity a different identity, but belonging to the same family(PK).
    // See them as more like PK-Surname, SK-FirstName. i.e. in a family, you have the same surname but different firstNames.
    SK: { sortKey: true, default: (data) => `OWNER#${data.id}` },
    id: { save: false },
    //below, add metadata of this entity.
    //i.e. maybe ownerid, image, etc.
    // this is simply a type defination of the data of the entity.
    post_id: "string",
  },
  // Assign it to our table
  table: PostsTable,
});

// export const listPosts = async (id) => {
//   try {
//     const { Items } = await Post.query(`POST#`);
//     console.log(Items);
//     Items.id = Items.PK;
//     return Items;
//   } catch (error) {
//     return error;
//   }
// };

// export const getPost = async (id) => {
//   try {
//     const { Items } = await Post.query(`POST#${id}`, { beginsWith: "INFO" });
//     console.log(Items);
//     const Item = Items[0]; // DIRTY
//     Item.id = Item.PK;
//     return Item;
//   } catch (error) {
//     return error;
//   }
// };

// export const deletePost = async (id) => {
//   try {
//     const deleted = await Post.delete(`post#${id}`);

//     if (!deleted) return `Post ${id} does not exist`;

//     return `Post ${id} was deleted`;
//   } catch (error) {
//     return error;
//   }
// };

// export const updatePost = async (id, title, text) => {
//   try {
//     const { Attributes } = await Post.update(
//       { id, ...postInput.post },
//       { returnValues: "all_new" }
//     );
//     console.log(Attributes);
//     Attributes.id = Attributes.PK;
//     return Attributes;
//   } catch (error) {
//     return error;
//   }
// };

export const createPost = async (id, title, text) => {
  //basically, the arguments are the expected fields for the particular function.
  //because this is a javaScript file, you can't use a single type that you then pass in as an encompassing argument.
  // but if you're setting this up with typescript, you can run it as the one type, which you must have earlier defined.
  try {
    const newPost = await Post.put({ id, title, text });
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
