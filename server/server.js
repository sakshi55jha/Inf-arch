const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors({
  origin: '*', // Allow frontend development requests
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Static files (for images/assets if accessed directly from backend)
app.use('/images', express.static(path.join(__dirname, '../client/public/images')));
app.use('/assets', express.static(path.join(__dirname, '../client/public/assets')));

// API Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/inquiries', require('./routes/inquiryRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));
app.use('/api/quotations', require('./routes/quotationRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));
app.use('/api/stats', require('./routes/statsRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Inches & Feet API',
    database: require('mongoose').connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

// Root API welcome
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Inches & Feet Architecture & Interior Design API',
    endpoints: [
      '/api/projects',
      '/api/inquiries',
      '/api/applications',
      '/api/quotations',
      '/api/testimonials',
      '/api/newsletter',
      '/api/stats',
      '/api/health',
    ],
  });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Resource not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Inches & Feet Server running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
});
