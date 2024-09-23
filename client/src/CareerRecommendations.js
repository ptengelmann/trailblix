import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, CircularProgress } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CareerRecommendations = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch career data (replace with your actual API)
  const fetchCareerData = async () => {
    try {
      // Replace with your API URL
      const response = await axios.get('https://api.example.com/career-data');
      setCareers(response.data); // Store the fetched data in the state
      setLoading(false);
    } catch (error) {
      console.error('Error fetching career data:', error);
      setLoading(false);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchCareerData();
  }, []);

  // Using dummy data for now, replace with actual data from the API when available
  const dummyCareers = [
    { title: 'Software Engineer', salary: '£50,000 - £80,000', demand: 80 },
    { title: 'Data Scientist', salary: '£60,000 - £90,000', demand: 90 },
    { title: 'UX Designer', salary: '£40,000 - £70,000', demand: 70 },
  ];

  // Use dummy data for now or swap with actual career data
  const dataToUse = careers.length ? careers : dummyCareers;

  // Job demand visualization data for Bar chart
  const jobDemandData = {
    labels: dataToUse.map((career) => career.title),
    datasets: [
      {
        label: 'Job Demand (%)',
        data: dataToUse.map((career) => career.demand),
        backgroundColor: 'rgba(26, 188, 156, 0.5)',
        borderColor: 'rgba(26, 188, 156, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f4f7', minHeight: '100vh' }}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1ABC9C', fontWeight: 'bold' }}>
            Career Recommendations
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#34495E', marginBottom: '20px' }}>
            Explore personalized career paths based on market demand and your profile.
          </Typography>

          {/* Display Career Cards */}
          <Grid container spacing={3} justifyContent="center">
            {dataToUse.map((career, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.05)', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1ABC9C' }}>
                      {career.title}
                    </Typography>
                    <Typography variant="body1" sx={{ margin: '10px 0' }}>
                      Salary Range: {career.salary}
                    </Typography>
                    <Typography variant="body1">
                      Job Demand: {career.demand}%
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: 2, backgroundColor: '#1ABC9C', '&:hover': { backgroundColor: '#16A085' } }}
                    >
                      View Jobs
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Job Demand Visualization */}
          <Box
            sx={{
              marginTop: 6,
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              maxWidth: '800px',
              margin: '40px auto',
              height: '400px', // Set height for the chart container
            }}
          >
            <Typography variant="h6" sx={{ color: '#34495E', fontWeight: 'bold', marginBottom: '20px' }}>
              Job Market Demand Visualization
            </Typography>
            <Box sx={{ height: '100%' }}>
              <Bar data={jobDemandData} options={{ maintainAspectRatio: false }} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CareerRecommendations;
