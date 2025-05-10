const express = require("express");
const { addContactMessage } = require("../controllers/contactController");

const router = express.Router();

// Route to handle contact form submissions
router.post("/", addContactMessage);

module.exports = router;