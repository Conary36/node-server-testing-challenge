
exports.up = function(knex) {
    return knex.schema
   .createTable('cars', function(cars) {
      cars.increments();
      cars
        .string('name')
        .notNullable()
        .unique();
    })
};

exports.down = function (knex) {;
    return knex.schema.dropTableIfExists("cars");
};
