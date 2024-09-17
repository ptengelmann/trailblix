const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' });

const app = express();

const corsOptions = {
    origin: ['https://trailblix.netlify.app', 'http://localhost:3000'], // Allow your Netlify app and localhost
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Optional, if you're working with cookies or auth headers
};
app.use(cors(corsOptions));

app.use(express.json());

app.post('/api/profile', (req, res) => {
    const { name, education, skills, interests } = req.body;
    if (!name || !education || !skills || !interests) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    // Implement logic to save profile (for now just respond with success)
    res.status(200).json({ message: 'Profile submitted successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
