const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' });
console.log('MongoDB URI:', process.env.MONGO_URI); // Add this line to check if the URI is being loaded correctly

const app = express();

// Configure CORS
const corsOptions = {
    origin: 'https://verdant-malasada-8d5370.netlify.app', // Your Netlify URL (exact origin)
    methods: ['GET', 'POST'], // Specify allowed methods (GET, POST, etc.)
    allowedHeaders: ['Content-Type'], // Specify allowed headers (Content-Type, Authorization, etc.)
    optionsSuccessStatus: 200, // Some browsers require a success status for legacy reasons
  };
  
  // Use CORS middleware with options
  app.use(cors(corsOptions));
  
  // Parse JSON requests (to handle form data submissions)
  app.use(express.json());
  
  // Your routes
  app.post('/api/profile', (req, res) => {
    // Your logic for handling profile creation
    res.status(200).json({ message: 'Profile submitted successfully!' });
  });
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });