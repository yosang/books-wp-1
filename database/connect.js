const mysql = require("mysql2");

const db = {
  connection: mysql.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }),
};

module.exports = db;
