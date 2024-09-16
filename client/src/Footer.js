import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#2C3E50', color: 'white', textAlign: 'center' }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} Trailblix - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
