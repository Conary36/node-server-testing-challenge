
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { name: 'ferrari'},
        { name: 'BMW'},
        { name: 'Mercedes'}
      ]);
    });
};
