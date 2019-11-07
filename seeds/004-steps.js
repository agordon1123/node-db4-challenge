
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: "1", name: "Boil water", position: "1" },
        { recipe_id: "1", name: "Add pasta and cover", position: "2" },
        { recipe_id: "1", name: "Melt cheeese and create sauce", position: "3" },
        { recipe_id: "1", name: "Add pasta to cheese sauce", position: "4" },
        { recipe_id: "2", name: "Prepare fish", position: "1" },
        { recipe_id: "2", name: "Prepare chips", position: "2" },
        { recipe_id: "2", name: "Bread fish", position: "3" },
        { recipe_id: "2", name: "Fry fish", position: "4" },
        { recipe_id: "2", name: "Fry chips", position: "5" },
        { recipe_id: "3", name: "Prepare nachos", position: "1" },
        { recipe_id: "3", name: "Bake", position: "2" },
        { recipe_id: "3", name: "Enjoy with salsa", position: "3" },
      ]);
    });
};
