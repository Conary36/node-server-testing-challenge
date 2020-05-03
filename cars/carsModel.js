const db = require('../data/dbConfig.js');

module.exports = {
    get,
    insert,
    remove
}
function get(){
    return db('cars');
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