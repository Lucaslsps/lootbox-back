const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    googleId: {
        type: String,
        required: false
    },
    googleImgUrl: {
        type: String,
        required: false
    },
    cards: {
        type: Array,
        required: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;