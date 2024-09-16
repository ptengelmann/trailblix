const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' });

console.log('MongoDB URI:', process.env.MONGO_URI); // Debug: Ensure MongoDB URI is loaded correctly

const app = express();

// Configure CORS
const corsOptions = {
  origin: 'https://verdant-malasada-8d5370.netlify.app', // Your Netlify URL (replace with correct one if different)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow more methods if needed
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'], // Include all possible headers
  credentials: true, // If you're using cookies or authentication headers
  optionsSuccessStatus: 200, // Some browsers (like IE11) need this for success responses
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight OPTIONS requests for all routes
app.options('*', cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Example route for profile creation
app.post('/api/profile', (req, res) => {
  console.log('Request received:', req.body); // Debug: Check if request body is being received correctly
  // Your logic for handling profile creation
  res.status(200).json({ message: 'Profile submitted successfully!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
