const Contact = require("../models/Contact");

// Controller to handle adding a contact message
const addContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addContactMessage,
};