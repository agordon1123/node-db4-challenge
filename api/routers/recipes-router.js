const express = require('express');
const Recipes = require('../models/recipes-model');
const Recipe_Ingredients = require('../models/recipe-ingredients');
const Steps = require('../models/steps-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Recipes.getRecipeById(id)
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(500).json(err));
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    Recipe_Ingredients.getShoppingList(id)
        .then(shoppingList => res.status(200).json(shoppingList))
        .catch(err => res.status(500).json(err));
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    Steps.getInstructions(id)
        .then(instructions => res.status(200).json(instructions))
        .catch(err => res.status(500).json(err))
});

module.exports = router;
