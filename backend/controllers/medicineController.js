const Medicine = require("../models/Medicine");

// Controller to add a new medicine
const addMedicine = async (req, res) => {
  console.log("Request body:", req.body);
  try {
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.status(201).json({ message: "Medicine added successfully", medicine });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addMedicine,
};