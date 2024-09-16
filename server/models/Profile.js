const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    education: { type: String, required: true },
    skills: { type: [String], required: true },
    interests: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Profile', ProfileSchema);
