const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Middleware setup function
const setupMiddleware = (app) => {
  // Enable Cross-Origin Resource Sharing (CORS)
  app.use(cors());

  // Log HTTP requests
  app.use(morgan("dev"));

  // Parse incoming JSON requests
  app.use(bodyParser.json());

  // Parse URL-encoded data
  app.use(bodyParser.urlencoded({ extended: true }));

  // Custom error-handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  });
};

module.exports = setupMiddleware;

