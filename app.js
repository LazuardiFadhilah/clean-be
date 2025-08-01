const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

console.log("CORS_ORIGIN dari variabel lingkungan:", process.env.CORS_ORIGIN);

app.use(
  cors({
    origin: "http://localhost:3001",

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/billings", require("./routes/billingRoutes"));

module.exports = app;
