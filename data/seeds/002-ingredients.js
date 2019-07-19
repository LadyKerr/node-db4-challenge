exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          id: 1,
          ingredient_name: "water",
          quantity: "5 cups",
          recipe_id: 1,
          steps_id: 1
        },
        {
          id: 1,
          ingredient_name: "spaghetti",
          quantity: "1 pk",
          recipe_id: 1,
          steps_id: 2
        },
        {
          id: 2,
          ingredient_name: "tomato sauce",
          quantity: "1 jar",
          recipe_id: 1,
          steps_id: 3
        },
        {
          id: 3,
          ingredient_name: "parsley",
          quantity: "5 tblsp",
          recipe_id: 1,
          steps_id: 4
        },
        {
          id: 4,
          ingredient_name: "shredded parmesean",
          quantity: "2 cups",
          recipe_id: 1,
          steps_id: 5
        }
      ]);
    });
};
