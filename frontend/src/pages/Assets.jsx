import React, { useState } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Stack, TextField, Select, MenuItem,
} from '@mui/material';
import { assets as initialAssets, users } from '../data/dummyData';
import { Link } from 'react-router-dom';

const Assets = () => {
  const [assetList, setAssetList] = useState(initialAssets);
  const [editingId, setEditingId] = useState(null);
  const [editedAsset, setEditedAsset] = useState({});

  const handleEdit = (a) => {
    setEditingId(a.id);
    setEditedAsset({ ...a });
  };
  const handleChange = (f, v) => {
    setEditedAsset((p) => ({ ...p, [f]: v }));
  };
  const handleSave = () => {
    setAssetList(assetList.map((a) => (a.id === editingId ? editedAsset : a)));
    setEditingId(null);
    setEditedAsset({});
  };
  const handleDisable = (id) => {
    setAssetList(assetList.map((a) => (a.id === id ? { ...a, isActive: false } : a)));
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>Assets</Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              {['ID', 'Name', 'Type', 'Location', 'Brand', 'Owner', 'Actions'].map((h) => (
                <TableCell key={h}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {assetList.map((a) => (
              <TableRow key={a.id}>
                <TableCell>{a.id}</TableCell>
                <TableCell>
                  {editingId === a.id ? (
                    <TextField size="small" value={editedAsset.name} onChange={(e) => handleChange('name', e.target.value)} />
                  ) : (
                    <Link to={`/asset/${a.id}`} style={{ color: '#1976d2', textDecoration: 'underline' }}>{a.name}</Link>
                  )}
                </TableCell>
                {['type', 'location', 'brand'].map((f) => (
                  <TableCell key={f}>
                    {editingId === a.id ? (
                      <TextField size="small" value={editedAsset[f]} onChange={(e) => handleChange(f, e.target.value)} />
                    ) : a[f]}
                  </TableCell>
                ))}
                <TableCell>
                  {editingId === a.id ? (
                    <Select size="small" value={editedAsset.currentOwner} onChange={(e) => handleChange('currentOwner', e.target.value)}>
                      {users.map((u) => <MenuItem key={u.id} value={u.id}>{u.name}</MenuItem>)}
                    </Select>
                  ) : (
                    users.find((u) => u.id === a.currentOwner)?.name || 'Unknown'
                  )}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    {editingId === a.id ? (
                      <>
                        <Button variant="contained" color="success" size="small" onClick={handleSave}>Save</Button>
                        <Button variant="outlined" color="inherit" size="small" onClick={() => setEditingId(null)}>Cancel</Button>
                      </>
                    ) : (
                      <>
                        <Button variant="contained" color="primary" size="small" onClick={() => handleEdit(a)}>Edit</Button>
                        <Button variant="contained" color="warning" size="small" onClick={() => handleEdit({ ...a, currentOwner: a.currentOwner })}>Change Owner</Button>
                        <Button variant="contained" color="error" size="small" disabled={!a.isActive} onClick={() => handleDisable(a.id)}>Disable</Button>
                      </>
                    )}
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
