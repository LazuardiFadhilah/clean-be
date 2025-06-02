const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    booking_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true,
    },
    discount_code: {
        type: String,
        default: null,
    },
    appointment_value: {
        type: Number,
        required: true,
    },
    discount_amount: {
        type: Number,
        default: 0,
    },
    subtotal: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Billing', billingSchema);