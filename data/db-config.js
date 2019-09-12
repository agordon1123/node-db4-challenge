const knex = require('knex')

const config = require('./recipe-db.db3');

module.exports = knex(config.development);
