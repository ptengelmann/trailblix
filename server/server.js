const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' }); // Load environment variables

console.log('MongoDB URI:', process.env.MONGO_URI); // Debugging to ensure MongoDB URI is loaded

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://verdant-malasada-8d5370.netlify.app', // Ensure this is the correct Netlify URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow more HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow any necessary headers
  credentials: true, // Enable this if you're using authentication (e.g., cookies)
  optionsSuccessStatus: 200, // For legacy browser support
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Example route for profile creation
app.post('/api/profile', (req, res) => {
  console.log('Profile data:', req.body); // Debugging request data
  res.status(200).json({ message: 'Profile submitted successfully!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
