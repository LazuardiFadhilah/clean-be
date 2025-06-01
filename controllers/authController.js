const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
}

const register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = generateToken(user);
        res.status(201).json({
            status: 'success',
            data: {
                id: user.id,
            email: user.email,
            fullname: user.fullname,
            phone_number: user.phone_number,
            token
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
       const match = user && await user.comparePassword(req.body.password);
        if (!user || !match) {
            throw new Error('INVALID_CREDENTIALS');
        }
        const token = generateToken(user);
        res.status(200).json({
            status: 'success',
            data: {
                id: user.id,
                email: user.email,
                fullname: user.fullname,
                phone_number: user.phone_number,
                token
            }
        });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }}

const profile = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.user.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            status: 'success',
            data: {
                id: user.id,
                email: user.email,
                fullname: user.fullname,
                phone_number: user.phone_number
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
module.exports = {
    register,
    login,
    profile
};