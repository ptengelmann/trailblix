import React, { useState } from 'react';
import { Box, Button, Typography, Stepper, Step, StepLabel, TextField, Chip, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { motion } from 'framer-motion'; // For modern animations
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation

// Step components and categories
const steps = ['Personal Info', 'Skills & Experience', 'Interests & Goals'];

const skillCategories = {
  'Programming & Technology': ['JavaScript', 'Python', 'Machine Learning', 'Cloud Computing', 'DevOps'],
  'Business & Management': ['Project Management', 'Leadership', 'Business Analytics', 'Finance & Accounting'],
  'Design & Creativity': ['Graphic Design', 'UX/UI Design', '3D Modeling', 'Animation', 'Illustration'],
  'Soft Skills': ['Public Speaking', 'Negotiation', 'Teamwork', 'Conflict Resolution'],
};

const educationOptions = ['Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Bootcamp Graduate'];

const ProfileForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    skills: [],
    interests: '',
    careerGoals: '',
  });
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate(); // Use for navigation

  // Handle step navigation
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle skill selection
  const handleSkillSelect = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  // Submit form
  const handleSubmit = async () => {
    try {
      const profileData = { ...formData, skills: selectedSkills };
      console.log('Profile submitted:', profileData);
      const response = await axios.post('http://localhost:5000/api/profile', profileData); // Adjust to your backend URL
      if (response.status === 200) {
        alert('Profile successfully submitted!');
        navigate('/dashboard'); // Navigate to the dashboard after submission
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
      alert('Failed to submit profile');
    }
  };

  // Steps form content
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Education</InputLabel>
              <Select
                name="education"
                value={formData.education}
                onChange={handleInputChange}
              >
                {educationOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6">Select Your Skills</Typography>
            {Object.keys(skillCategories).map((category, idx) => (
              <Box key={idx} sx={{ marginBottom: 2 }}>
                <Typography variant="subtitle1">{category}</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {skillCategories[category].map((skill, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }}>
                      <Chip
                        label={skill}
                        clickable
                        onClick={() => handleSkillSelect(skill)}
                        color={selectedSkills.includes(skill) ? 'primary' : 'default'}
                        sx={{
                          backgroundColor: selectedSkills.includes(skill) ? '#1ABC9C' : '#e0e0e0',
                          color: selectedSkills.includes(skill) ? '#fff' : '#000',
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        );
      case 2:
        return (
          <Box>
            <TextField
              label="Interests"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Career Goals"
              name="careerGoals"
              value={formData.careerGoals}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f4f7', minHeight: '100vh', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: '#1ABC9C' }}>
        Complete Your Profile
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ marginTop: 4 }}>
        {getStepContent(activeStep)}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          {activeStep > 0 && (
            <Button variant="contained" color="inherit" onClick={handleBack}>
              Back
            </Button>
          )}
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileForm;
