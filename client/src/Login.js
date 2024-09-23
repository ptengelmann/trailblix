import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      localStorage.setItem('authToken', response.data.token); // Save token in localStorage
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      setError('Login failed. Try again.');
    }
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 500, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField label="Email" name="email" onChange={handleInputChange} fullWidth margin="normal" />
      <TextField label="Password" name="password" type="password" onChange={handleInputChange} fullWidth margin="normal" />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
    </Box>
  );
};

export default Login;
