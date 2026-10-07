const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Inquiry = require('../models/Inquiry');
const Application = require('../models/Application');
const Quotation = require('../models/Quotation');
const Newsletter = require('../models/Newsletter');

router.get('/', async (req, res) => {
  try {
    const [projectCount, inquiryCount, applicationCount, quotationCount, subscriberCount] = await Promise.all([
      Project.countDocuments(),
      Inquiry.countDocuments(),
      Application.countDocuments(),
      Quotation.countDocuments(),
      Newsletter.countDocuments(),
    ]);

    const recentInquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(5);
    const recentQuotes = await Quotation.find().sort({ createdAt: -1 }).limit(5);
    const recentApplications = await Application.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      success: true,
      stats: {
        projects: projectCount,
        inquiries: inquiryCount,
        applications: applicationCount,
        quotations: quotationCount,
        subscribers: subscriberCount,
      },
      recent: {
        inquiries: recentInquiries,
        quotations: recentQuotes,
        applications: recentApplications,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
