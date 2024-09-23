import React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material'; // Import social media icons

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#2C3E50', // Darker background for brand consistency
        color: 'white',
        textAlign: 'center',
        borderTop: '4px solid #1abc9c', // Add Trailblix brand color accent
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        © {new Date().getFullYear()} Trailblix - All Rights Reserved
      </Typography>

      {/* Social Media Icons with hover effect and aria-label for accessibility */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        <Tooltip title="Facebook" arrow>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            sx={{
              color: '#1abc9c',
              '&:hover': { transform: 'scale(1.1)', color: '#16a085' }, // Hover effect
              transition: 'transform 0.3s ease-in-out',
            }}
            aria-label="Facebook"
          >
            <Facebook />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Twitter" arrow>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            sx={{
              color: '#1abc9c',
              '&:hover': { transform: 'scale(1.1)', color: '#16a085' },
              transition: 'transform 0.3s ease-in-out',
            }}
            aria-label="Twitter"
          >
            <Twitter />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn" arrow>
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            sx={{
              color: '#1abc9c',
              '&:hover': { transform: 'scale(1.1)', color: '#16a085' },
              transition: 'transform 0.3s ease-in-out',
            }}
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </IconButton>
        </Tooltip>

        <Tooltip title="Instagram" arrow>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            sx={{
              color: '#1abc9c',
              '&:hover': { transform: 'scale(1.1)', color: '#16a085' },
              transition: 'transform 0.3s ease-in-out',
            }}
            aria-label="Instagram"
          >
            <Instagram />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Footer;
