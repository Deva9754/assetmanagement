// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Asset Types', path: '/asset-types' },
  { label: 'Assets', path: '/assets' },
  { label: 'Transfer', path: '/transfer' },
  { label: 'Reports', path: '/reports' },
  { label: 'Users', path: '/users' }
];

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Asset Management
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              sx={{ textTransform: 'none' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
