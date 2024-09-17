const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' });

const app = express();

// CORS configuration
const corsOptions = {
    origin: 'https://trailblix.netlify.app', // Ensure this is EXACTLY your Netlify URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.post('/api/profile', (req, res) => {
    res.status(200).json({ message: 'Profile submitted successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
