const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    default: 'Global',
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Residential', 'Commercial', 'Hospitality & Cafes', 'Architecture & BIM', 'All'],
    default: 'Architecture & BIM',
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  year: {
    type: String,
    default: '2023-2024',
  },
  area: {
    type: String,
    default: 'Custom Scale',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
