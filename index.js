require("dotenv").config();



// Database
const db = require("./database");

// Express
const express = require("express");
const app = express();

// PORT
const port = process.env.API_PORT || 5000;

// Middlewares
app.use(express.json()); // Parses JSON bodies from requests

// Routers
const indexRouter = require("./routes/index");
const booksRouter = require("./routes/books");

app.use("/", indexRouter);
app.use("/books", booksRouter);

// Express init
app.listen(port, (err) => {
  if (err) return console.log(`Express served failed to start on ${port}`, err);

  console.log(`Express server is running on port ${port}`);
  db.init();
});
