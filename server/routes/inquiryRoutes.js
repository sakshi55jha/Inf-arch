const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// GET all inquiries (Admin)
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const inquiries = await Inquiry.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST new consultation inquiry / contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, projectLocation, budget, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields',
      });
    }

    const inquiry = new Inquiry({
      name,
      email,
      phone,
      service,
      projectLocation,
      budget,
      message,
    });

    const saved = await inquiry.save();
    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully! An architect will reach out shortly.',
      data: saved,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH update inquiry status
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }
    res.json({ success: true, data: inquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE inquiry
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Inquiry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }
    res.json({ success: true, message: 'Inquiry deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
