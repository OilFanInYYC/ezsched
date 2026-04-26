const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MARIADB_URI,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DB,
  waitForConnections: true,
  connectionLimit: 10
});