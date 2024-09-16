const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' });
console.log('MongoDB URI:', process.env.MONGO_URI); // Add this line to check if the URI is being loaded correctly

const app = express();

// Update CORS settings to allow your Netlify domain
const corsOptions = {
    origin: 'https://66e898aa5e1644218734b7c0--verdant-malasada-8d5370.netlify.app', // Netlify domain
    optionsSuccessStatus: 200, // For legacy browser support
  };

// Middleware
app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

// Routes
app.use('/api/profile', require('./routes/profileRoutes')); // User profile routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
