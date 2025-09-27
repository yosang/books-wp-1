const mysql = require("mysql2");

const db = {
  connection: mysql.createConnection({
    database: "booklibrary",
    user: "booksUser",
    password: "admin",
  }),
};

module.exports = db;
