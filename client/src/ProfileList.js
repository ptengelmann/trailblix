import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Submitted Profiles
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {profiles.map((profile, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={profile.name}
                secondary={`Education: ${profile.education} | Skills: ${profile.skills.join(', ')} | Interests: ${profile.interests.join(', ')}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ProfileList;
