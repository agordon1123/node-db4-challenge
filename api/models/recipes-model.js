const db = require('../../data/db-config');

module.exports = {
    getRecipes,
    getRecipeById,
};

function getRecipes() {
    return db('recipes')
};

function getRecipeById(id) {
    return db('recipes').where({ id })
};
