const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');
const {Booking, getBooking, getBookingById,updateBooking, deleteBooking} = require('../controllers/bookingController');

router.get('/', protect, getBooking);
router.get('/:id', protect, getBookingById);
router.post('/', protect, Booking);
router.put('/:id', protect, updateBooking);
router.delete('/:id', protect, deleteBooking);

module.exports = router;