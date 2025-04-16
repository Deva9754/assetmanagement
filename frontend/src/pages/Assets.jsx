import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import { assets, users } from '../data/dummyData';
import { Link } from 'react-router-dom';

const Assets = () => {
  const handleChangeOwner = (assetId, newOwnerId) => {
    alert(`Change owner of asset ${assetId} to user ${newOwnerId}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Assets
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell>{asset.id}</TableCell>
                <TableCell>
                  <Link to={`/asset/${asset.id}`} style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    {asset.name}
                  </Link>
                </TableCell>
                <TableCell>{asset.type}</TableCell>
                <TableCell>{asset.location}</TableCell>
                <TableCell>{asset.brand}</TableCell>
                <TableCell>
                  {users.find((user) => user.id === asset.currentOwner)?.name || 'Unknown'}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="primary" size="small">
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      size="small"
                      onClick={() => handleChangeOwner(asset.id, 'newOwnerId')}
                    >
                      Change Owner
                    </Button>
                    <Button variant="contained" color="error" size="small">
                      Disable
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Assets;
