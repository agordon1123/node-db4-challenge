const db = require('../../data/db-config');

module.exports = {
    getInstructions,
};

function getInstructions(recipe_id) {
    return db('steps')
        .select('position', 'name')
        .where({ recipe_id })
};