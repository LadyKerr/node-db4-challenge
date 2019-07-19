exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          ingredient_name: "water",
          quantity: 4.5,
          recipe_id: 1,
          steps_id: 1
        },
        {
          ingredient_name: "spaghetti",
          quantity: 1.5,
          recipe_id: 1,
          steps_id: 2
        },
        {
          ingredient_name: "tomato sauce",
          quantity: 1.5,
          recipe_id: 1,
          steps_id: 3
        },
        {
          ingredient_name: "parsley",
          quantity: 2.3,
          recipe_id: 1,
          steps_id: 4
        },
        {
          ingredient_name: "shredded parmesean",
          quantity: 2.4,
          recipe_id: 1,
          steps_id: 5
        }
      ]);
    });
};
