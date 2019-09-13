const db = require('../../data/db-config');

module.exports = {
    getIngredients,
    getIngredientById,
    getRecipesByIngredient,
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
