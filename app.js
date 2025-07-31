const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

// Konfigurasi CORS yang lebih aman dan fleksibel
const allowedOrigins = [
    'http://localhost:3001',
    'https://clean-fe.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // izinkan request tanpa origin (misalnya Postman)
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error('CORS not allowed for this origin'), false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// Handle preflight (OPTIONS) request untuk semua route
app.options('*', cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/billings', require('./routes/billingRoutes'));

module.exports = app;