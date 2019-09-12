
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable();
        tbl
            .string('prep_time', 18)
            .notNullable();
        tbl
            .string('cook_time', 18)
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable();
        tbl
            .string('measurement', 18)
            .notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('quantity', 3)
            .notNullable();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .string('name', 128)
            .notNullable();
        tbl
            .integer('position', 3)
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
};
