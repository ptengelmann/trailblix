import React from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Box, Typography, Grid, Fade, Tooltip, Avatar } from '@mui/material';
import { AutoAwesomeMotion, InsightsOutlined, TrendingFlat } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import Footer from './Footer'; // Import the Footer component

// Keyframes for icon animations
const growIcon = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

// Keyframes for background animation
const gradientBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Parallax effect for background
const parallaxEffect = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

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

function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(-45deg, #1abc9c, #16a085, #3498db, #2980b9)',
        backgroundSize: '400% 400%',
        animation: `${gradientBackground} 10s ease infinite, ${parallaxEffect} 5s ease-in-out infinite`,
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {/* Hero Section with enhanced headline */}
        <Fade in={true} timeout={1000}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
            Discover Your Perfect Career Path with AI
          </Typography>
        </Fade>
        <Fade in={true} timeout={1500}>
          <Typography variant="h6" color="textSecondary" gutterBottom sx={{ color: '#ecf0f1', maxWidth: '700px' }}>
            Enter your profession of interest, and let us guide you toward a successful, AI-powered career journey with personalized recommendations.
          </Typography>
        </Fade>

        {/* Call to Action */}
        <Fade in={true} timeout={2000}>
          <Link to="/profile" style={{ textDecoration: 'none', marginTop: '20px' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: '12px 36px',
                fontSize: '20px',
                backgroundColor: '#2ecc71',
                animation: `${pulseEffect} 2s infinite`,
                '&:hover': {
                  backgroundColor: '#27ae60',
                  transform: 'scale(1.1)',
                },
                transition: 'transform 0.4s ease-in-out',
              }}
            >
              Get Started
            </Button>
          </Link>
        </Fade>

        {/* Features Section */}
        <Box sx={{ marginTop: '60px', width: { xs: '100%', md: '80%' } }}>
          <Fade in={true} timeout={2500}>
            <Typography variant="h4" gutterBottom sx={{ marginBottom: '30px', color: '#fff', fontWeight: 'bold' }}>
              Why Trailblix?
            </Typography>
          </Fade>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Tooltip title="AI-powered career suggestions" arrow>
                <AutoAwesomeMotion
                  sx={{
                    fontSize: 70,
                    color: '#1abc9c',
                    animation: `${growIcon} 0.6s ease-in-out alternate infinite`,
                    '&:hover': { transform: 'scale(1.3)', color: '#27ae60' },
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </Tooltip>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', marginTop: '15px' }}>
                AI Career Recommendations
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: '#ecf0f1' }}>
                Get personalized AI-driven career paths based on your profile.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Tooltip title="Job Market Insights" arrow>
                <InsightsOutlined
                  sx={{
                    fontSize: 70,
                    color: '#1abc9c',
                    animation: `${growIcon} 0.6s ease-in-out alternate infinite`,
                    '&:hover': { transform: 'scale(1.3)', color: '#27ae60' },
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </Tooltip>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', marginTop: '15px' }}>
                Job Market Insights
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: '#ecf0f1' }}>
                Stay informed with real-time job market trends and insights.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Tooltip title="Personalized Learning Paths" arrow>
                <TrendingFlat
                  sx={{
                    fontSize: 70,
                    color: '#1abc9c',
                    animation: `${growIcon} 0.6s ease-in-out alternate infinite`,
                    '&:hover': { transform: 'scale(1.3)', color: '#27ae60' },
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </Tooltip>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', marginTop: '15px' }}>
                Personalized Learning Paths
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: '#ecf0f1' }}>
                Get learning resources tailored to your career goals.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ marginTop: '80px', paddingBottom: '40px', width: '100%', backgroundColor: '#fff', color: '#333', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
            What Our Users Are Saying
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Avatar alt="User 1" src="/user1.jpg" sx={{ width: 80, height: 80, margin: 'auto' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '15px' }}>
                John Doe
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '10px' }}>
                "Trailblix completely transformed my career. The AI suggestions were spot on, and I landed my dream job in just a few weeks!"
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Avatar alt="User 2" src="/user2.jpg" sx={{ width: 80, height: 80, margin: 'auto' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '15px' }}>
                Sarah Smith
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '10px' }}>
                "The personalized learning paths helped me upskill quickly. I now feel more confident in my career path."
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Avatar alt="User 3" src="/user3.jpg" sx={{ width: 80, height: 80, margin: 'auto' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '15px' }}>
                James Lee
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '10px' }}>
                "Thanks to Trailblix, I found a new career that aligns with my passions and skills!"
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Home;
