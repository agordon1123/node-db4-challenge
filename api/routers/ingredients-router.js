const express = require('express');
const Ingredients = require('../models/ingredients-model');

const router = express.Router();

router.get('/', (req, res) => {
    Ingredients.getIngredients()
        .then(ingredients => res.status(200).json(ingredients))
        .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Ingredients.getIngredientById(id)
        .then(ingredient => res.status(200).json(ingredient))
        .catch(err => res.status(500).json(err));
});

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;
    console.log(id);
    Ingredients.getRecipesByIngredient(id)
        .then(recipes => res.status(200).json(recipes))
        .catch(err => res.status(200).json(err));
});

module.exports = router;
