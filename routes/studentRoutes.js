const express = require("express");
const mongoose = require("mongoose");
const Student = require("../models/Student");

const router = express.Router();

// CREATE - POST /students
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      message: "Student created successfully",
      student
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create student",
      error: error.message
    });
  }
});

// READ ALL - GET /students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get students",
      error: error.message
    });
  }
});

// READ ONE - GET /students/:id
router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid student ID" });
    }

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get student",
      error: error.message
    });
  }
});

// UPDATE - PUT /students/:id
router.put("/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid student ID" });
    }

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update student",
      error: error.message
    });
  }
});

// DELETE - DELETE /students/:id
router.delete("/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid student ID" });
    }

    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete student",
      error: error.message
    });
  }
});

module.exports = router;
