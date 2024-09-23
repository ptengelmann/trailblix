const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

// Create a new profile (POST request)
router.post('/', async (req, res) => {
    const { name, education, skills, interests } = req.body;

    // Log the incoming data
    console.log("Incoming profile data: ", { name, education, skills, interests });

    // Validate that required fields are present
    if (!name || !education || !skills || !interests) {
        console.error('Missing required fields');
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Save the profile directly without splitting the skills array
        const newProfile = new Profile({ name, education, skills, interests });
        console.log("New profile to save: ", newProfile);  // Log the profile object before saving
        await newProfile.save();
        console.log("Profile saved successfully: ", newProfile);

        // Send success response
        res.status(200).json({ message: 'Profile created successfully', profile: newProfile });
    } catch (error) {
        console.error('Error saving profile:', error);  // Log the error in detail
        res.status(500).json({ error: 'Error saving profile' });
    }
});

module.exports = router;
