const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
   bedroom:{
    type: String,
    required: true,
   },
   bathroom:{
    type: String,
    required: true,
   },
   clean_type:{
    type: String,
    enum: ['standard', 'deep', 'moving', 'post-construction'],
    default: 'standard',
   },
   date:{
    type: Date
   },
   time:{
    type: String,
    required: true,
   },
   is_flexible:{
    type: Boolean,
    default: true,
   },
   frequency:{
    type: String,
    enum: ['one-time', 'weekly', 'bi-weekly', 'monthly'],
    default: 'one-time',
   },
   address:{

    type: String,
    required: true,
   },
   entry_method:{
    type: String,
    enum: ['someone_home','doorman','hidden_key','other'],
    default: 'other',
   },
   add_ons:{
    type: [String],
    enum: ['inside_fridge','inside_oven','inside_cabinets'],
    default: [],
   },
   has_pets:{
    type: Boolean,
    default: false,
   },
   pet_type:{
    type: String,
   },
   notes:{
    type: String,
   },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Booking', bookingSchema);