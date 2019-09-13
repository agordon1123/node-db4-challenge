const db = require('../../data/db-config');

module.exports = {
    getIngredients,
    getIngredientById,
    getRecipesByIngredient,
    addRecipeIngredient,
};

function getIngredients() {
    return db('ingredients')
};

function getIngredientById(id) {
    return db('ingredients').where({ id })
};

function getRecipesByIngredient(ingredient_id) {
    return db('recipe_ingredients')
        .select('recipe_id')
        .where({ ingredient_id })
};

function addRecipeIngredient(newRecipeIngredient, recipe_id) {
    newRecipeIngredient.recipe_id = recipe_id;
    return db('recipe_ingredients')
        .insert(newRecipeIngredient);
};
