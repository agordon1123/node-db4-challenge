
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "Milk", measurement: "Cup" },
        { name: "Olives", measurement: "Cup" },
        { name: "Eggs", measurement: "Single" },
        { name: "Bread", measurement: "Slice" },
        { name: "Velveeta Cheese", measurement: "Cup" },
        { name: "Fresh Fish", measurement: "Single" },
        { name: "Ketchup", measurement: "Tbsp." },
        { name: "Chips", measurement: "Per (lg-bag)" },
        { name: "Potatoes", measurement: "Single (med-size)" },
        { name: "Salsa", measurement: "Cup" },
        { name: "Shredded Cheese", measurement: "Cup" },
        { name: "Beer", measurement: "Single" },
        { name: "Flour", measurement: "Cup" },
        { name: "Salt", measurement: "Tsp." },
        { name: "Elbow Pasta", measurement: ".lb" },
      ]);
    });
};
