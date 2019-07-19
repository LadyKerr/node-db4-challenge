exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          steps_id: 1,
          description: "place spaghetti in a pot of boiling water"
        },
        {
          steps_id: 2,
          description: "after draining, add sauce to pasta"
        },
        { steps_id: 3, description: "chop pumpkin in cubes" },
        { steps_id: 4, description: "boil noodles in water" },
        {
          steps_id: 5,
          description: "boil water then add washed rice to the pot"
        }
      ]);
    });
};
