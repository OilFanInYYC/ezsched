const mysql = require('mysql2');

const mysqlConnect = mysql.createConnection({
  host: process.env.MARIADB_URI,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DB
});

exports.mysqlConnect = mysqlConnect;