import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f0f4f7',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Discover What Your Future Career Looks Like
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Enter your desired profession and get a personalized career path.
      </Typography>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{
            padding: '10px 30px',
            fontSize: '18px',
            backgroundColor: '#1ABC9C',
            '&:hover': {
              backgroundColor: '#16A085',
              transform: 'scale(1.05)',
            },
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          Start Now
        </Button>
      </Link>
    </Box>
  );
}

export default Home;
