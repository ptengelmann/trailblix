const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' });

const app = express();

// Configure CORS
const corsOptions = {
    origin: 'https://trailblix.netlify.app', // Your Netlify URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true, // Allow credentials if needed
};

// Use the CORS middleware
app.use(cors(corsOptions));

// Parse JSON requests
app.use(express.json());

// Handle preflight OPTIONS request for CORS
app.options('*', cors(corsOptions));

// Example route for profile creation
app.post('/api/profile', (req, res) => {
    res.status(200).json({ message: 'Profile submitted successfully!' });
});

// Basic route to ensure the API is running
app.get('/', (req, res) => {
    res.send('Welcome to Trailblix API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
