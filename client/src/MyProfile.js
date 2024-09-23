import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Avatar, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import axios from 'axios';

const MyProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    interests: '',
    profilePicture: ''
  });
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  useEffect(() => {
    // Fetch the current user profile data
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get('http://localhost:5000/api/my-profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFormData(response.data);
        setProfilePicturePreview(response.data.profilePicture);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });
    setProfilePicturePreview(URL.createObjectURL(file)); // Show preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');

    try {
      const formDataWithPicture = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataWithPicture.append(key, formData[key]);
      });

      await axios.put('http://localhost:5000/api/my-profile', formDataWithPicture, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>

      <Avatar
        alt="Profile Picture"
        src={profilePicturePreview}
        sx={{ width: 100, height: 100, margin: 'auto' }}
      />
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" onChange={handleProfilePictureChange} />
        <PhotoCamera />
      </IconButton>

      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
          disabled
        />
        <TextField
          label="Education"
          name="education"
          value={formData.education}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Interests"
          name="interests"
          value={formData.interests}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Update Profile
        </Button>
      </form>
    </Box>
  );
};

export default MyProfile;
