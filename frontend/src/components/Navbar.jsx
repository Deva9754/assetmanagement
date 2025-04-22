import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useSnackbar } from '../context/SnackBarContext';
import { users } from '../data/dummyData';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Asset Types', path: '/asset-types' },
  { label: 'Assets', path: '/assets' },
  { label: 'Transfer', path: '/transfer' },
  { label: 'Reports', path: '/reports' },
  { label: 'Users', path: '/users' },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const handleLogout = () => {
    showSnackbar("Logging out...", 'success');
    setTimeout(async () => {
      try {
        await signOut(auth);
        navigate('/');
      } catch (error) {
        showSnackbar("Error logging out, try again", 'error');
      }
    }, 2000);
  };

  // Get current user info from dummyData using Firebase UID
  const currentUserUid = auth.currentUser?.uid;
  const currentUser = users.find((u) => u.uid === currentUserUid);

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo / Title */}
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {isMobile ? '🧾' : 'Asset Management'}
        </Typography>

        {/* Nav Items */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
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

          {/* Display User Info */}
          {currentUser && (
            <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
              👤 {currentUser.name} | {currentUser.role}
            </Typography>
          )}

          {/* Logout */}
          <Button
            color="inherit"
            sx={{ textTransform: 'none' }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
