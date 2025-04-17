// ✅ App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AssetTypes from './pages/AssetTypes';
import Assets from './pages/Assets';
import AssetDetail from './pages/AssetDetail';
import TransferAsset from './pages/TransferAsset';
import UserList from './pages/UserList';
import UserTransaction from './pages/UserTransaction';
import Reports from './pages/Reports';
import { Box } from '@mui/material';


const App = () => {
  return (
    <Box
    sx={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #e3f2fd, #f5f5f5, #ffffff)',
      color: 'text.primary',
    }}
  >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/asset-types" element={<AssetTypes />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/assets/:id" element={<AssetDetail />} />
        <Route path="/transfer" element={<TransferAsset />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/reports" element={<Reports />} />

        <Route path="/user-transactions/:id" element={<UserTransaction />} />
      </Routes>
    </Router>
    </Box>
  );
};

export default App;
