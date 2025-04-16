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

const App = () => {
  return (
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
  );
};

export default App;
