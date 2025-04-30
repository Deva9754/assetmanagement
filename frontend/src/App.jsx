
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AssetTypes from "./pages/AssetTypes";
import Assets from "./pages/Assets";
import AssetDetail from "./pages/AssetDetail";
import TransferAsset from "./pages/TransferAsset";
import UserList from "./pages/UserList";
import Reports from "./pages/Reports";
import UserTransaction from "./pages/UserTransaction";
import Layout from "./components/Layout";



const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/asset-types" element={<AssetTypes />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/assets/:id" element={<AssetDetail />} />
            <Route path="/transfer" element={<TransferAsset />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/user-transactions/:id" element={<UserTransaction />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
