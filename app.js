const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

console.log("CORS_ORIGIN dari variabel lingkungan:", process.env.CORS_ORIGIN);

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3001",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};


app.use(
  cors(corsOptions)
);
app.options(/.*/, cors(corsOptions));



app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/billings", require("./routes/billingRoutes"));

module.exports = app;
