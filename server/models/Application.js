const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  fullName: {
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
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    enum: [
      'Senior Architect',
      'Junior Architectural Designer',
      'BIM Specialist / Revit Modeler',
      'Interior Designer',
      '3D Visualizer & Rendering Artist',
      'Project Coordinator',
      'Other',
    ],
  },
  experienceYears: {
    type: String,
    default: '1-3 years',
  },
  portfolioUrl: {
    type: String,
    trim: true,
  },
  resumeLink: {
    type: String,
    trim: true,
  },
  coverNote: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['Submitted', 'Shortlisted', 'Interviewing', 'Offered', 'Archived'],
    default: 'Submitted',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Application', ApplicationSchema);
