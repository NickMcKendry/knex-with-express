const config = require('../knexfile')

const enviroment = process.env.NODE_ENV || 'development'

const pg = require('knex')(config[enviroment])

module.exports = pg
