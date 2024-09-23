import React from 'react';
import { Box, Typography, Card, CardContent, LinearProgress, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components for visualizations
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const skillGapData = {
    labels: ['JavaScript', 'React', 'Machine Learning', 'DevOps', 'Design'],
    datasets: [
      {
        label: 'Skill Mastery (%)',
        data: [75, 50, 60, 40, 85],
        backgroundColor: ['#1ABC9C', '#16A085', '#3498DB', '#2980B9', '#E74C3C'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f0f4f7',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <Typography variant="h2" sx={{ color: '#1ABC9C', fontWeight: 'bold' }}>
          Welcome to Your Career Dashboard
        </Typography>
        <Typography variant="h6" sx={{ color: '#34495E', marginBottom: 2 }}>
          Track your progress and achievements as you work toward your career goals.
        </Typography>
      </motion.div>

      {/* Career Suggestions */}
      <Grid container spacing={4} justifyContent="center">
        {['Software Engineer', 'Data Scientist', 'UX Designer'].map((career, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
              <Card
                sx={{
                  backgroundColor: '#fff',
                  color: '#1ABC9C',
                  padding: '20px',
                  borderRadius: 2,
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                  '&:hover': { boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {career}
                  </Typography>
                  <Typography variant="body1" sx={{ margin: '10px 0' }}>
                    Your recommended career path. Explore and master the required skills!
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={Math.random() * 100}
                    sx={{
                      height: '10px',
                      borderRadius: '5px',
                      marginTop: '10px',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#1ABC9C',
                      },
                    }}
                  />
                  <Typography variant="body2" sx={{ marginTop: '10px', color: '#34495E' }}>
                    Progress: {Math.floor(Math.random() * 100)}%
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Skill Gap Analysis */}
      <Box>
        <Typography variant="h4" sx={{ color: '#34495E', fontWeight: 'bold', marginBottom: '20px' }}>
          Skill Gap Analysis
        </Typography>
        <Box
          sx={{
            maxWidth: '600px', // Adjust width
            margin: 'auto',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            height: '400px', // Adjust height
          }}
        >
          <Typography variant="h6" sx={{ color: '#34495E', marginBottom: '10px', fontWeight: 'bold' }}>
            Visualize your current skills and areas for improvement
          </Typography>
          <Box sx={{ height: '100%', width: '100%' }}>
            <Bar data={skillGapData} options={{ maintainAspectRatio: false }} />
          </Box>
        </Box>
      </Box>

      {/* Career Progress */}
      <Box>
        <Typography variant="h4" sx={{ color: '#34495E', mb: 2, fontWeight: 'bold' }}>
          Overall Career Progress
        </Typography>
        <LinearProgress
          variant="determinate"
          value={75} // Adjust dynamically based on user's actual progress
          sx={{
            height: '20px',
            borderRadius: '10px',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#1ABC9C',
            },
          }}
        />
        <Typography variant="body2" sx={{ color: '#34495E', marginTop: 1 }}>
          75% Complete – Keep pushing toward your goals!
        </Typography>
      </Box>

      {/* Badges & Achievements */}
      <Box>
  <Typography variant="h4" sx={{ color: '#34495E', mb: 2, fontWeight: 'bold' }}>
    Achievements & Rewards
  </Typography>
  
  {/* Levels and Progress Badges */}
  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
    {[
      { level: 'Learning Achiever', progress: '40%', category: 'learning', color: '#3498DB' },
      { level: 'Skill Master - Python', progress: '100%', category: 'skills', color: '#1ABC9C' },
      { level: 'Career Builder', progress: '75%', category: 'career', color: '#E74C3C' }
    ].map((achievement, index) => (
      <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
        <Chip
          label={`${achievement.level} (${achievement.progress})`}
          sx={{
            fontSize: '18px',
            padding: '20px',
            fontWeight: 'bold',
            backgroundColor: achievement.color,
            color: '#fff',
          }}
        />
      </motion.div>
    ))}
  </Box>
    </Box>
    </Box>
  );
};

export default Dashboard;
