const express = require('express');
const router = express.Router();
const Quotation = require('../models/Quotation');

// Calculate estimated price helper
function calculateEstimate(projectType, areaSqFt, scope, packageTier) {
  let ratePerSqFt = 75; // base rate in INR or unit currency

  if (projectType === 'Luxury Villa / Bungalow') ratePerSqFt = 120;
  else if (projectType === 'Commercial Office') ratePerSqFt = 95;
  else if (projectType === 'Cafe / Restaurant') ratePerSqFt = 110;
  else if (projectType === 'Retail & Hospitality') ratePerSqFt = 130;
  else ratePerSqFt = 85;

  let tierMultiplier = 1.0;
  if (packageTier === 'Signature Premium') tierMultiplier = 1.4;
  if (packageTier === 'Turnkey Bespoke') tierMultiplier = 1.9;

  let scopeMultiplier = 1.0 + (Array.isArray(scope) ? Math.max(0, scope.length - 1) * 0.25 : 0);

  const baseTotal = areaSqFt * ratePerSqFt * tierMultiplier * scopeMultiplier;
  const min = Math.round(baseTotal * 0.9);
  const max = Math.round(baseTotal * 1.15);

  return { min, max };
}

// GET all quotations (Admin)
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const quotes = await Quotation.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: quotes.length, data: quotes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST calculate and create quotation request
router.post('/', async (req, res) => {
  try {
    const { clientName, clientEmail, clientPhone, projectType, areaSqFt, scope, packageTier, notes } = req.body;

    if (!clientName || !clientEmail || !clientPhone || !projectType || !areaSqFt) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, project type, and area are required',
      });
    }

    const { min, max } = calculateEstimate(projectType, Number(areaSqFt), scope, packageTier);

    const quotation = new Quotation({
      clientName,
      clientEmail,
      clientPhone,
      projectType,
      areaSqFt: Number(areaSqFt),
      scope: Array.isArray(scope) ? scope : [scope],
      packageTier: packageTier || 'Signature Premium',
      estimatedCostMin: min,
      estimatedCostMax: max,
      notes: notes || '',
    });

    const saved = await quotation.save();
    res.status(201).json({
      success: true,
      message: 'Estimate calculated and quotation requested successfully!',
      data: saved,
      estimate: { min, max },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH status
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const quote = await Quotation.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!quote) {
      return res.status(404).json({ success: false, message: 'Quotation not found' });
    }
    res.json({ success: true, data: quote });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
