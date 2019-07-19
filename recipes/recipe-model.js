const db = require("../data/db-config");

module.exports = {
  get,
  getInstructions,
  getShoppingList
};

//GET all recipes in db
function get() {
  return db("recipes");
}

//GET ingredients & quantities for recipe by id
function getShoppingList(id) {
  return db("recipes as r")
    .innerJoin("ingredients as i", "r.id", "i.recipe_id")
    .select("r.recipe_name", "i.ingredient_name", "i.quantity")
    .where("r.id", id); //ingredient.id? test and see lol
}

//GET steps for recipe id
function getInstructions(id) {
  return db("recipes as r")
    .innerJoin("ingredients as i", "r.id", "i.recipe_id")
    .innerJoin("steps as s", "i.steps_id", "s.id")
    .select("r.recipe_name", "s.steps_id", "s.description")
    .where("r.id", id);
}
