const db = require("./connect");

const sql = `CREATE TABLE IF NOT EXISTS books(
    id INT AUTO_INCREMENT PRIMARY key,
    title VARCHAR(100),
    author VARCHAR(100),
    genre VARCHAR(100),
    publication_year INT,
    metadata JSON
)`;

db.init = () => {
  db.connection.query(sql, (err, results) => {
    if (err) return console.log("Unable to update database", err);

    console.log("Database updated");
  });
};

module.exports = db;
