const express = require("express");
const { addMedicine } = require("../controllers/medicineController");
const router = express.Router();
const Medicine = require("../models/Medicine.js");

// Add Medicine
router.post("/add", addMedicine);

// Get All Medicines
router.get("/", async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Medicine
router.delete("/:id", async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ message: "Medicine deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
