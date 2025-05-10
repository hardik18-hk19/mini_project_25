const express = require("express");
const { addFAQ, getFAQs } = require("../controllers/faqController");

const router = express.Router();

// Route to add a new FAQ
router.post("/add", addFAQ);

// Route to get all FAQs
router.get("/", getFAQs);

module.exports = router;
