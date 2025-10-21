const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', required: true },
    password: { type: 'String', required: true },
    phone: { type: 'String' },
    profile: { type: 'String' },
    address: { type: 'Object' },
    role: { type: 'String', enum: ['customer', 'admin'], default: 'customer' }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;