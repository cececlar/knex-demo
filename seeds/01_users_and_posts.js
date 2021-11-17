const usersData = [
  {
    id: 1,
    name: "Ernie",
  },
  {
    id: 2,
    name: "Cece",
  },
  {
    id: 3,
    name: "Signe",
  },
  {
    id: 4,
    name: "Josh",
  },
];

const postsData = [
  {
    id: 1,
    title: "First Post",
    content: "Hello world.",
    user_id: 2,
  },
  {
    id: 2,
    title: "Another post",
    content: "Today I saw a bird",
    user_id: 3,
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(usersData);
    })
    .then(function () {
      knex("posts").del();
    })
    .then(function () {
      return knex("posts").insert(postsData);
    });
};
