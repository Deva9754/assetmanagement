// src/pages/AssetTypes.jsx
import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Paper,
  TableContainer,
} from '@mui/material';
import { assetTypes } from '../data/dummyData';

const AssetTypes = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Asset Types
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {assetTypes.map((type) => (
              <TableRow key={type.id}>
                <TableCell>{type.id}</TableCell>
                <TableCell>{type.name}</TableCell>
                <TableCell>
                  {type.isActive ? 'Active' : 'Disabled'}
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="contained" color="error" size="small">
                    Disable
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AssetTypes;
