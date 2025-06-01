const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/bookings', require('./routes/bookingRoutes'));
// app.use('/api/billings', require('./routes/billingRoutes'));

module.exports = app;