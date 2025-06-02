const Billing = require("../models/Billing");
const Booking = require("../models/Booking");

exports.createBilling = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const duplicateBilling = await Billing.findOne({ booking_id: bookingId });
    if (duplicateBilling) {
      return res.status(400).json({ message: "BILLING_ALREADY_EXISTS" });
    }
    if (!bookingId) {
      return res.status(400).json({ message: "BOOKING_ID_REQUIRED" });
    }
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "BOOKING_NOT_FOUND" });
    }
    const bedroom_price = booking.bedroom * 20; // Example price calculation
    const bathroom_price = booking.bathroom * 10; // Example price calculation
    let clean_type_price = 0;
    if (booking.clean_type === "standard") {
      clean_type_price = 50; // Example price for standard clean
    }
    if (booking.clean_type === "deep") {
      clean_type_price = 70; // Example price for deep clean
    }
    if (booking.clean_type === "moving") {
      clean_type_price = 90; // Example price for deep clean
    }
    if (booking.clean_type === "post-construction") {
      clean_type_price = 100; // Example price for deep clean
    }
    const appointment_value = bedroom_price + bathroom_price + clean_type_price;
    let discount_amount = 0;
    const discount_code = req.body?.discount_code || null;
    if(discount_code === "ARD10OFF"){
     discount_amount = appointment_value * 0.1; // 10% discount
    }
    const subtotal = appointment_value - (discount_amount || 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    const billingData = {
      booking_id: bookingId,
      discount_code: discount_code || null,
      appointment_value,
      discount_amount,
      subtotal,
      tax,
      total,
    };
    const billing = await Billing.create(billingData);
    res.status(201).json({
      status: "success",
      data: {
        id: billing.id,
        booking_id: billing.booking_id,
        discount_code: billing.discount_code,
        appointment_value: billing.appointment_value,
        discount_amount: billing.discount_amount,
        subtotal: billing.subtotal,
        tax: billing.tax,
        total: billing.total,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getBillingByBookingId = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const billing = await Billing.findOne({ booking_id: bookingId });
    if (!billing) {
      return res.status(404).json({ message: "BILLING_NOT_FOUND" });
    }
    res.status(200).json({
      status: "success",
      data: {
        id: billing.id,
        booking_id: billing.booking_id,
        discount_code: billing.discount_code,
        appointment_value: billing.appointment_value,
        discount_amount: billing.discount_amount,
        subtotal: billing.subtotal,
        tax: billing.tax,
        total: billing.total,
      },
    });
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
}