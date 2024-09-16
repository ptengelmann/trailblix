import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#F7F7F7', // Milky modern color
          boxShadow: 'none',
          padding: '0 30px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="logo">
            <Box
              component="img"
              src="/tree-logo.png"
              alt="Tree Logo"
              sx={{
                height: 100, // Larger logo size
                width: 'auto',
                marginRight: 2,
              }}
            />
          </IconButton>

          {/* Menu for larger screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                fontSize: '16px',
                color: '#333', // Dark text color for contrast
                '&:hover': {
                  backgroundColor: '#E0E0E0', // Lighter hover effect for modern look
                },
              }}
            >
              Home
            </Button>
            <Button
  color="inherit"
  component={Link}
  to="/profiles"
  sx={{
    fontSize: '16px',
    color: '#333',
    '&:hover': {
      backgroundColor: '#E0E0E0',
    },
  }}
>
  Profiles
</Button>

          </Box>

          {/* Hamburger menu for small screens */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon sx={{ color: '#333' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { backgroundColor: '#F7F7F7', color: '#333' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
