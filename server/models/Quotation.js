const mongoose = require('mongoose');

const QuotationSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  clientEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  clientPhone: {
    type: String,
    required: true,
    trim: true,
  },
  projectType: {
    type: String,
    required: true,
    enum: ['Luxury Villa / Bungalow', 'Apartment / Condominium', 'Commercial Office', 'Cafe / Restaurant', 'Retail & Hospitality'],
  },
  areaSqFt: {
    type: Number,
    required: true,
  },
  scope: {
    type: [String],
    default: ['Architecture Design'],
  },
  packageTier: {
    type: String,
    enum: ['Essential Blueprint', 'Signature Premium', 'Turnkey Bespoke'],
    default: 'Signature Premium',
  },
  estimatedCostMin: {
    type: Number,
  },
  estimatedCostMax: {
    type: Number,
  },
  notes: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['Pending Review', 'Quote Prepared', 'Sent to Client', 'Accepted', 'Declined'],
    default: 'Pending Review',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quotation', QuotationSchema);
