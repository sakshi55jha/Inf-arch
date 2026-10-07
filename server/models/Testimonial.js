const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'Property Owner',
  },
  location: {
    type: String,
    default: 'Bangalore, India',
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
  content: {
    type: String,
    required: true,
  },
  projectType: {
    type: String,
    default: 'Interior & Architecture',
  },
  avatar: {
    type: String,
    default: '/assets/img/logo/logo.png',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
