const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }
    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.json({ success: true, message: 'You are already subscribed to design updates!' });
    }
    const sub = new Newsletter({ email });
    await sub.save();
    res.status(201).json({ success: true, message: 'Thank you for subscribing to Inches & Feet insights!' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
