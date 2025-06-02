const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');
const {createBilling, getBillingByBookingId} = require('../controllers/billingController');


router.post('/:bookingId', protect, createBilling);
router.get('/:bookingId', protect, getBillingByBookingId);
module.exports = router;