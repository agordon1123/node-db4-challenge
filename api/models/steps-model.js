const db = require('../../data/db-config');

module.exports = {
    getInstructions,
    addStep,
};

function getInstructions(recipe_id) {
    return db('steps')
        .select('position', 'name')
        .where({ recipe_id })
};

function addStep(newStep, recipe_id) {
    newStep.recipe_id  = recipe_id;
    return db('steps')
        .insert(newStep)
};
