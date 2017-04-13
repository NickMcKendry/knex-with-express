const config = require('../knexfile')

const enviroment = process.env.DATABASE_URL || 'development'

const pg = require('knex')(config[enviroment])
