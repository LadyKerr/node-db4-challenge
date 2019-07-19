exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          recipe_name: "Pasta",
          recipe_description: "A delicious one pot pasta meal"
        },
        {
          id: 2,
          recipe_name: "Soup",
          recipe_description: "My favorite Pumpkin soup"
        },
        {
          id: 3,
          recipe_name: "Rice and Beans",
          recipe_description: "This is a quick and easy meal"
        }
      ]);
    });
};
