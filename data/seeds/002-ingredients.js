exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          ingredient_id: 1,
          ingredient_name: "spaghetti",
          quantity: "1pk",
          recipe_id: 1,
          steps_id: 1
        },
        {
          ingredient_id: 2,
          ingredient_name: "tomato sauce",
          quantity: "1 jar",
          recipe_id: 1,
          steps_id: 2
        },
        {
          ingredient_id: 3,
          ingredient_name: "pumpkin",
          quantity: "3 cups",
          recipe_id: 2,
          steps_id: 3
        },
        {
          ingredient_id: 4,
          ingredient_name: "noodles",
          quantity: "1pk",
          recipe_id: 2,
          steps_id: 4
        },
        {
          ingredient_id: 5,
          ingredient_name: "brown rice",
          quantity: "1 cup",
          recipe_id: 3,
          steps_id: 5
        }
      ]);
    });
};
