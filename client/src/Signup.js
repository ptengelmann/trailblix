import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [successDialog, setSuccessDialog] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', formData);
      setSuccessDialog(true); // Show success dialog
    } catch (error) {
      setError('Sign up failed. Try again.');
    }
  };

  const handleDialogClose = () => {
    setSuccessDialog(false);
    navigate('/login'); // Redirect to login after closing the dialog
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 500, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      <TextField label="Name" name="name" onChange={handleInputChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" onChange={handleInputChange} fullWidth margin="normal" />
      <TextField label="Password" name="password" type="password" onChange={handleInputChange} fullWidth margin="normal" />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleSubmit}>Sign Up</Button>

      {/* Success Dialog */}
      <Dialog open={successDialog} onClose={handleDialogClose}>
        <DialogTitle>Sign Up Successful</DialogTitle>
        <DialogContent>
          <DialogContentText>Your account has been created successfully. Please log in to continue.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">Go to Login</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Signup;
