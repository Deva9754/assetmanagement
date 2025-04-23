
import React, { useState } from 'react';
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
  TextField,
} from '@mui/material';
import { assetTypes as initialTypes } from '../data/dummyData';

const AssetTypes = () => {
  const [types, setTypes] = useState(initialTypes);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleEdit = (type) => {
    setEditingId(type.id);
    setEditedName(type.name);
  };

  const handleSave = (id) => {
    const updated = types.map((t) =>
      t.id === id ? { ...t, name: editedName } : t
    );
    setTypes(updated);
    setEditingId(null);
    setEditedName('');
  };

  const handleDisable = (id) => {
    const updated = types.map((t) =>
      t.id === id ? { ...t, isActive: false } : t
    );
    setTypes(updated);
  };

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
            {types.map((type) => (
              <TableRow key={type.id}>
                <TableCell>{type.id}</TableCell>
                <TableCell>
                  {editingId === type.id ? (
                    <TextField
                      size="small"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    type.name
                  )}
                </TableCell>
                <TableCell>
                  {type.isActive ? 'Active' : 'Disabled'}
                </TableCell>
                <TableCell>
                  {editingId === type.id ? (
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      sx={{ mr: 1 }}
                      onClick={() => handleSave(type.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                      onClick={() => handleEdit(type)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    disabled={!type.isActive}
                    onClick={() => handleDisable(type.id)}
                  >
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

