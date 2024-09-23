import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Box, Button, TextField, Typography, Tooltip } from '@mui/material';
import { keyframes } from '@mui/system';

// Keyframes for button hover effect
const pulseEffect = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(46, 204, 113, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
  }
`;

const Login = () => {
  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    // Here, handle the successful Google login response
    // e.g., send the token to your backend server for verification and user creation
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
    alert('Google login failed.');
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Box
        sx={{
          padding: 4,
          maxWidth: 500,
          margin: 'auto',
          textAlign: 'center',
          backgroundColor: '#f4f4f4', // light background to match modern theme
          borderRadius: 2,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2C3E50' }}>
          Login
        </Typography>

        <Box sx={{ marginBottom: 3 }}>
          <TextField label="Email" variant="outlined" fullWidth />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Password" type="password" variant="outlined" fullWidth />
        </Box>

        <Typography variant="body2" sx={{ marginBottom: 2, color: '#3498db', cursor: 'pointer' }}>
          Forgot Password?
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            marginBottom: 3,
            backgroundColor: '#2ecc71',
            padding: '10px 20px',
            fontSize: '16px',
            animation: `${pulseEffect} 2s infinite`,
            '&:hover': {
              backgroundColor: '#27ae60',
              transform: 'scale(1.05)',
            },
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          Login
        </Button>

        <Typography variant="h6" sx={{ marginBottom: 2, color: '#2C3E50' }}>Or Login with</Typography>

        {/* Google Login Button */}
        <Tooltip title="Log in using your Google account" arrow>
          <Box sx={{ marginBottom: 2 }}>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
              useOneTap
            />
          </Box>
        </Tooltip>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default Login;
