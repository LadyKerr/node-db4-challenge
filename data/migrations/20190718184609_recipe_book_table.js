exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("recipe_name", 128)
        .notNullable()
        .unique();

      tbl.string("recipe_description", 300).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name", 258).notNullable();
      tbl.float("quantity").notNullable();
      //Foreign Key 1
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      //Foreign Key 2
      tbl
        .integer("steps_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("steps", tbl => {
      tbl.increments("steps_id");

      tbl
        .integer("step_number")
        .notNullable()
        .unique();

      tbl.string("description", 800).notNullable();
    });
};

exports.down = function(knex) {
  //drop tables in opposite order
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
