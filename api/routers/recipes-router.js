const express = require('express');
const Recipes = require('../models/recipes-model');
const Recipe_Ingredients = require('../models/recipe-ingredients-model');
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

router.post('/', (req, res) => {
    const newRecipe = req.body;
    if(!newRecipe.name || !newRecipe.prep_time || !newRecipe.cook_time) {
        res.status(400).json({ error: 'Please include a name, prep time, and cook time with the request' })
    } else {
        Recipes.addRecipe(newRecipe)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(500).json(err))
    };
});

router.post('/:id/instructions', (req, res) => {
    const { id } = req.params;
    const newStep = req.body;
    if (!newStep.name || !newStep.position) {
        res.status(400).json({ error: 'Please include a name and step position with the request' })
    } else {
        Steps.addStep(newStep, id)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(500).json(err));
    };
});

module.exports = router;
