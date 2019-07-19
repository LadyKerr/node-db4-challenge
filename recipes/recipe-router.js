const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

//GET all recipes in db
router.get("/", (req, res) => {
  Recipes.get()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status().json({ message: "There was an error connecting to the db" });
    });
});

//GET ingredients & quantities for recipe by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(list => {
      if (list) {
        res.status(200).json(list);
      } else {
        res
          .status(404)
          .json({ message: "The recipe with that ID doesn't exist" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error getting your shopping list." });
    });
});

//GET steps for recipe id
router.get("/:id/steps", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(steps => {
      if (steps && steps.length) {
        res.status(200).json(steps);
      } else {
        res
          .status(404)
          .json({ message: "The recipe with that ID doesnt exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "error in retrieving steps" });
    });
});

module.exports = router;
