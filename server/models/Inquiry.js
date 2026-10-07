const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  service: {
    type: String,
    enum: [
      'Architecture Design',
      'Interior Design',
      'Building Information Modeling (BIM)',
      'Luxury House Plans',
      'Cafe & Commercial Space',
      'Turnkey Construction',
      'General Consultation',
    ],
    default: 'General Consultation',
  },
  projectLocation: {
    type: String,
    default: '',
  },
  budget: {
    type: String,
    default: 'Flexible',
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['New', 'In Review', 'Contacted', 'Scheduled', 'Completed'],
    default: 'New',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Inquiry', InquirySchema);
