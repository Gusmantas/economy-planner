const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "SECRET-KEY",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = { pool };
