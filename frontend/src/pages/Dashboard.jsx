import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { assets, users } from '../data/dummyData';

const Dashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Total Assets
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {assets.length}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Total Users
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {users.length}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
