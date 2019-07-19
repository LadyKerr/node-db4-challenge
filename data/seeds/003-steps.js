exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          id: 1,
          description: "boil 5 cups of water for 5 mins"
        },
        {
          id: 2,
          description: "place spaghetti in boiling water for 10 mins"
        },
        { id: 3, description: "drain spaghetti and add pasta sauce" },
        { id: 4, description: "chop and add parsely" },
        {
          id: 5,
          description: "top with parmesean and serve hot. Enjoy!"
        }
      ]);
    });
};
