const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// GET all applications (Admin)
router.get('/', async (req, res) => {
  try {
    const { status, position } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (position) filter.position = position;

    const apps = await Application.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: apps.length, data: apps });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST job application
router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, position, experienceYears, portfolioUrl, resumeLink, coverNote } = req.body;

    if (!fullName || !email || !phone || !position) {
      return res.status(400).json({
        success: false,
        message: 'Full name, email, phone, and position are required',
      });
    }

    const application = new Application({
      fullName,
      email,
      phone,
      position,
      experienceYears,
      portfolioUrl,
      resumeLink,
      coverNote,
    });

    const saved = await application.save();
    res.status(201).json({
      success: true,
      message: 'Application received! Our design talent team will review your profile.',
      data: saved,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH status
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.json({ success: true, data: application });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE application
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Application.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.json({ success: true, message: 'Application deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
