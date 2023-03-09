const { Pool } = require('pg')

var config = {
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "customer",
    password: "postgres"
  };

const pool = new Pool(config);

module.exports = {
  query: (text, params) => pool.query(text, params),
}