const db = require('../../data/db-config');

module.exports = {
    getShoppingList,
};

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
        .select('ingredient_id', 'quantity')
        .where({ recipe_id })
};
