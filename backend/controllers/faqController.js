const FAQ = require("../models/FAQ");

// Controller to add a new FAQ
const addFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new FAQ({ question, answer });
    await faq.save();
    res.status(201).json({ message: "FAQ added successfully", faq });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller to get all FAQs
const getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.status(200).json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addFAQ,
  getFAQs,
};