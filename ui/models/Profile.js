// models/Profile.js
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    careerField: { type: String, required: true },
    skills: { type: [String], required: true },
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
