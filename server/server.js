const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this is called to load .env without specifying the path unless necessary

const app = express();
console.log('Mongo URI:', process.env.MONGO_URI);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Define the Profile schema
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
    type: [String],  // Array of strings
    required: true
  },
  interests: {
    type: [String],  // Array of strings
    required: true
  }
});

// Create the Profile model
const Profile = mongoose.model('Profile', ProfileSchema);

// Updated CORS settings to allow localhost:3000 and Netlify
const corsOptions = {
  origin: ['https://trailblix.netlify.app', 'http://localhost:3000'], // Add localhost:3000 for development
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Use the CORS middleware
app.use(cors(corsOptions));

// Parse JSON requests
app.use(express.json());

// Handle preflight OPTIONS request for CORS
app.options('*', cors(corsOptions));

// POST route for profile creation, saving the profile to MongoDB
app.post('/api/profile', async (req, res) => {
  try {
    const { name, education, skills, interests } = req.body;

    // Create a new profile
    const newProfile = new Profile({
      name,
      education,
      skills: skills.split(',').map(skill => skill.trim()), // Convert skills to array
      interests: interests.split(',').map(interest => interest.trim()) // Convert interests to array
    });

    // Save the profile to the database
    await newProfile.save();

    res.status(200).json({ message: 'Profile submitted successfully!' });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ error: 'Failed to submit profile' });
  }
});

// GET route for fetching all profiles from MongoDB
app.get('/api/profile', async (req, res) => {
  try {
    const profiles = await Profile.find(); // Fetch all profiles from the database
    res.status(200).json(profiles); // Send the profiles as response
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ error: 'Failed to fetch profiles' });
  }
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
