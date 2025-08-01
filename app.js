const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

console.log('CORS_ORIGIN dari variabel lingkungan:', process.env.CORS_ORIGIN);

const allowedOrigins = [
    process.env.CORS_ORIGIN ,
    'http://localhost:3001',
];

app.use(cors({
    origin: function (origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error('CORS policy: Origin not allowed'), false);
        }
    },
  credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/billings', require('./routes/billingRoutes'));

module.exports = app;