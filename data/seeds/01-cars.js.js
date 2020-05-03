
exports.seed = function(knex) {
      return knex('cars').insert([
        { name: 'ferrari'},
        { name: 'BMW'},
        { name: 'Mercedes'}
      ]);
    };
