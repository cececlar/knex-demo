const express = require("express");
const database = require("./knexfile");
const knex = require("knex")(database);
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/users", (req, res) => {
  knex
    .select("*")
    .from("users")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ Err: err });
    });
});

app.get("/posts", (req, res) => {
  knex
    .select("*")
    .from("posts")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ Err: err });
    });
});

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
