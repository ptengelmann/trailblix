import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs'; // for hashing passwords
import jwt from 'jsonwebtoken'; // for creating JWT tokens
import User from './models/User.js'; // Assuming you have a User model
import Profile from './models/Profile.js'; // Profile model if needed
import connectDB from './config/db.js'; // Database connection

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow CORS if the frontend is on a different port

// Connect to the database
connectDB();

// POST /signup for user registration
app.post('/signup', async (req, res) => {
    const { username, email, password, marketingData } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            marketingData, // Store consent for marketing data
        });

        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with the user data and token
        res.status(201).json({ email: newUser.email, token });
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: 'Failed to create user.' });
    }
});

// Profile API Routes (optional)
app.post('/api/profile', async (req, res) => {
    const { userId, firstName, lastName, dateOfBirth, careerField, skills } = req.body;
    try {
        const profile = new Profile({
            userId,
            firstName,
            lastName,
            dateOfBirth,
            careerField,
            skills,
        });
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save profile data.' });
    }
});

app.get('/api/profile/:userId', async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.params.userId });
        if (!profile) return res.status(404).json({ message: 'Profile not found.' });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch profile data.' });
    }
});

// /api/quiz route for quiz submissions
app.post('/api/quiz', async (req, res) => {
    const { answers, additionalInfo } = req.body;

    console.log('Quiz answers received:', { answers, additionalInfo });

    try {
        // Save the quiz data into the Profile model or any other appropriate model
        const quizResult = new Profile({
            answers,
            additionalInfo,
        });

        await quizResult.save();

        res.status(200).json({ message: 'Quiz answers received successfully' });
    } catch (error) {
        console.error('Error processing quiz data:', error);
        res.status(500).json({ message: 'Failed to save quiz data.' });
    }
});

// Set the server to listen on the desired port (default 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
