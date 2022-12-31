// Connecting to a Postgres database from Node.js
const {Pool} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'libreria',
  password: 'tusibercito',
  port: 5432,
})

module.exports = pool;