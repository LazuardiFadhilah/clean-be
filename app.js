const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

console.log("CORS_ORIGIN dari variabel lingkungan:", process.env.CORS_ORIGIN);

// Array origin yang diizinkan
const allowedOrigins = [
  process.env.CORS_ORIGIN,
  "http://localhost:3001",
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // untuk request tanpa origin (Postman, curl)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Gunakan CORS untuk semua request
app.use(cors(corsOptions));

// Tangani preflight OPTIONS sebelum middleware lain
app.options(/.*/, cors(corsOptions));

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/billings", require("./routes/billingRoutes"));

module.exports = app;
