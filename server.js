// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/User.js'; // User model
import Profile from './models/Profile.js'; // Import Profile model
import connectDB from './config/db.js'; // Connect to DB

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Profile API Routes
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
