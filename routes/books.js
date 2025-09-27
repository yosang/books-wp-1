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
    res.status(500).json({ status: 500, message: "Internal Error" });
  }
});

// CREATE books
router.post("/", (req, res) => {
  try {
    // DATABASE query goes here

    res.status(201);
  } catch (err) {
    console.log("Unable to create book", err);
    res.status(500).json({ status: 500, message: "Internal Error" });
  }
});

// UPDATE books
router.put("/", (req, res) => {
  try {
    // DATABASE query goes here

    res.status(204);
  } catch (err) {
    console.log("Unable to update book", err);
    res.status(500).json({ status: 500, message: "Internal Error" });
  }
});

// DELETE books
router.delete("/", (_, res) => {
  try {
    // DATABASE query goes here

    res.status(204);
  } catch (err) {
    console.log("Unable to delete book", err);
    res.status(500).json({ status: 500, message: "Internal Error" });
  }
});

module.exports = router;
