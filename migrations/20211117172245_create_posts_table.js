exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments("id");
    table.integer("user_id").unsigned().notNullable();
    table.string("title", 30).notNullable();
    table.string("content").notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  // return knex.schema.dropTable("posts")
};
