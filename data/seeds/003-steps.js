exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          description: "boil 5 cups of water for 5 mins"
        },
        {
          description: "place spaghetti in boiling water for 10 mins"
        },
        { description: "drain spaghetti and add pasta sauce" },
        {  description: "chop and add parsely" },
        {
          description: "top with parmesean and serve hot. Enjoy!"
        }
      ]);
    });
};
