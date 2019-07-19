exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "Pasta",
          recipe_description: "A delicious one pot pasta meal"
        },
        {
          recipe_name: "Soup",
          recipe_description: "My favorite Pumpkin soup"
        },
        {
          recipe_name: "Rice and Beans",
          recipe_description: "This is a quick and easy meal"
        }
      ]);
    });
};
