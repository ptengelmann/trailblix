const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

// Create a new profile
router.post('/', async (req, res) => {
    const { name, education, skills, interests } = req.body;
    try {
        const newProfile = new Profile({ name, education, skills, interests });
        await newProfile.save();
        res.json({ message: 'Profile created successfully', profile: newProfile });
    } catch (error) {
        res.status(500).json({ error: 'Error creating profile' });
    }
});

// Get all profiles (for testing)
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching profiles' });
    }
});

module.exports = router;
