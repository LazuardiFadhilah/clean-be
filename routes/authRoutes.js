const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');
const {register, login, profile} = require('../controllers/authController');


// router.post('/register', register);
router.post('/login', login);
router.post('/register', register);
router.get('/me', protect, profile);
module.exports = router;