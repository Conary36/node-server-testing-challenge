const db = require('../data/dbConfig.js');

module.exports = {
    get,
    insert,
    getById,
    remove
}

function get() {
  return db("cars");
}
function getById(id) {
  return db("cars").where({ id }).first();
}

 async function insert(car){
    return db('cars')
    .insert(car)
    .then(ids => {
        return getById(ids[0]);
    });
}

function remove(id) {
    return db('cars')
        .where('id', id)
        .del();
}