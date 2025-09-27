require("dotenv").config();

// Database
const db = require('./database/init');

// Express
const express = require("express");
const app = express();

// PORT
const port = process.env.API_PORT || 5000;

// Middlewares
app.use(express.json()); // Parses JSON bodies from requests

// Test endpoint
app.get("/", (_, res) => {
  res.status(200).json({ status: 200, message: "Hello world" });
});

// Express init
app.listen(port, (err) => {
  if (err) return console.log(`Express served failed to start on ${port}`, err);

  console.log(`Express server is running on port ${port}`);
  db.init()
});
