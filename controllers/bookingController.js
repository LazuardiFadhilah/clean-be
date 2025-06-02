const { Types } = require('mongoose');
const Booking = require('../models/Booking');

exports.Booking = async (req, res) => {
    try {
        const booking = await Booking.create({...req.body, user_id:req.user.id});
        res.status(201).json({
            status: 'success',
            data: {
                id: booking.id,
                user_id: booking.user_id,
                bedroom: booking.bedroom,
                bathroom: booking.bathroom,
                clean_type: booking.clean_type,
                date: booking.date,
                time: booking.time,
                is_flexible: booking.is_flexible,
                frequency: booking.frequency,
                address: booking.address,
                entry_method: booking.entry_method,
                add_ons: booking.add_ons,
                has_pets: booking.has_pets,
                pet_type: booking.pet_type,
                notes: booking.notes
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getBooking = async (req, res) => {
    try {
    const booking = await Booking.find({ user_id: req.user.id });
        if (!booking) {
            return res.status(404).json({ message: 'BOOKING_NOT_FOUND' });
        }
        res.status(200).json({
            status: 'success',
            count: booking.length,
            data: booking.map((booking)=> ({
                id: booking.id,
                bedroom: booking.bedroom,
                bathroom: booking.bathroom,
                clean_type: booking.clean_type,
                date: booking.date,
                time: booking.time,
                is_flexible: booking.is_flexible,
                frequency: booking.frequency,
                address: booking.address,
                entry_method: booking.entry_method,
                add_ons: booking.add_ons,
                has_pets: booking.has_pets,
                pet_type: booking.pet_type,
                notes: booking.notes
            }))
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'BOOKING_NOT_FOUND' });
        }
        res.status(200).json({
            status: 'success',
            data: {
                 id: booking.id,
                user_id: booking.user_id,
                bedroom: booking.bedroom,
                bathroom: booking.bathroom,
                clean_type: booking.clean_type,
                date: booking.date,
                time: booking.time,
                is_flexible: booking.is_flexible,
                frequency: booking.frequency,
                address: booking.address,
                entry_method: booking.entry_method,
                add_ons: booking.add_ons,
                has_pets: booking.has_pets,
                pet_type: booking.pet_type,
                notes: booking.notes
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!booking) {
            return res.status(404).json({ message: 'BOOKING_NOT_FOUND' });
        }
        res.status(200).json({
            status: 'success',
            data: {
                 id: booking.id,
                user_id: booking.user_id,
                bedroom: booking.bedroom,
                bathroom: booking.bathroom,
                clean_type: booking.clean_type,
                date: booking.date,
                time: booking.time,
                is_flexible: booking.is_flexible,
                frequency: booking.frequency,
                address: booking.address,
                entry_method: booking.entry_method,
                add_ons: booking.add_ons,
                has_pets: booking.has_pets,
                pet_type: booking.pet_type,
                notes: booking.notes
            }
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'BOOKING_NOT_FOUND' });
        }
        res.status(200).json({
            status: 'success',
            message: 'BOOKING_DELETED_SUCCESSFULLY'
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}