import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/');
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        {isLoggedIn && (
          <>
            <ListItem button component={Link} to="/dashboard">
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/careers">
              <ListItemText primary="Career Recommendations" />
            </ListItem>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        )}
        {!isLoggedIn && (
          <>
            <ListItem button component={Link} to="/signup">
              <ListItemText primary="Sign Up" />
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#F7F7F7', boxShadow: 'none', padding: '0 30px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <Box
              component="img"
              src="/tree-logo.png"
              alt="Tree Logo"
              sx={{ height: 100, width: 'auto', marginRight: 2 }}
            />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Button color="inherit" component={Link} to="/" sx={{ fontSize: '16px', color: '#333' }}>
              Home
            </Button>
            {isLoggedIn ? (
              <>
                <Button color="inherit" component={Link} to="/dashboard" sx={{ fontSize: '16px', color: '#333' }}>
                  Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/careers" sx={{ fontSize: '16px', color: '#333' }}>
                  Career Recommendations
                </Button>
                <Button color="inherit" component={Link} to="/profile" sx={{ fontSize: '16px', color: '#333' }}>
                  My Profile
                </Button>
                <Button color="inherit" onClick={handleLogout} sx={{ fontSize: '16px', color: '#333' }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/signup" sx={{ fontSize: '16px', color: '#333' }}>
                  Sign Up
                </Button>
                <Button color="inherit" component={Link} to="/login" sx={{ fontSize: '16px', color: '#333' }}>
                  Login
                </Button>
              </>
            )}
          </Box>
          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' } }}>
            <MenuIcon sx={{ color: '#333' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ '& .MuiDrawer-paper': { backgroundColor: '#F7F7F7', color: '#333' } }}>
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
