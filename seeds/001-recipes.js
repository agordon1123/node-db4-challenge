
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: "Macaroni and Cheese", prep_time: "10", cook_time: "30" },
        { name: "Fish and Chips", prep_time: "30", cook_time: "20" },
        { name: "Nachos", prep_time: "15", cook_time: "5" }
      ]);
    });
};
