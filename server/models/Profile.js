const mongoose = require('mongoose');

// Define the profile schema
const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  skills: {
    type: [String],  // An array of skills
    required: true
  },
  interests: {
    type: [String],  // An array of interests
    required: true
  }
});

// Create and export the Profile model
module.exports = mongoose.model('Profile', ProfileSchema);
