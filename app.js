const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3001', // Default to localhost if not set
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.options('*', cors(corsOptions)); // Pre-flight request for all routes
app.use(cors(corsOptions));

app.use(express.json());



app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/billings', require('./routes/billingRoutes'));

module.exports = app;