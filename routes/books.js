const router = require("express").Router();
const db = require("../database");

// GET books
router.get("/", (_, res) => {
  try {
    // DATABASE query goes here
    db.connection.query("SELECT * FROM books", (err, result) => {
      if (err) {
        throw Error("Unable to query to database");
      }

      res.status(200).json({ status: 200, result });
    });
  } catch (err) {
    console.log("Unable to retrieve books", err);
    res
      .status(500)
      .json({ status: 500, message: "Internal Error", error: err.message });
  }
});

// CREATE books
router.post("/", (req, res) => {
  try {
    // Prepare data, metadata is an object and we are stringifying it in js before sending it off to mysql
    const body = req.body;
    const values = [];

    // For every column in the JSON object, check if metadata is a string or an object, if its an object stringify it, keep it as is otherwise
    for (key in body) {
      if (typeof body[key] === "object") values.push(JSON.stringify(body[key]));
      else values.push(body[key]);
    }

    // Send off the query to the database
    db.connection.query(
      "INSERT INTO books(title, author, genre, publication_year, metadata) VALUES(?, ?, ?, ?, ?)", values,
      (err, result) => {
        if (err) throw Error('The database record creation failed')

        console.log(result);
        res.status(201).end;
      }
    );
  } catch (err) {
    console.log("Unable to create book", err);
    res
      .status(500)
      .json({ status: 500, message: "Internal Error", error: err.message });
  }
});

// UPDATE books
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    // DATABASE query goes here

    res.status(204);
  } catch (err) {
    console.log("Unable to update book", err);
    res
      .status(500)
      .json({ status: 500, message: "Internal Error", error: err.message });
  }
});

// DELETE books
router.delete("/:id", (_, res) => {
  try {
    // DATABASE query goes here

    res.status(204);
  } catch (err) {
    console.log("Unable to delete book", err);
    res
      .status(500)
      .json({ status: 500, message: "Internal Error", error: err.message });
  }
});

module.exports = router;
