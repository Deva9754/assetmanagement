// import React from 'react';
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Stack,
// } from '@mui/material';
// import { assets, users } from '../data/dummyData';
// import { Link } from 'react-router-dom';

// const Assets = () => {
//   const handleChangeOwner = (assetId, newOwnerId) => {
//     alert(`Change owner of asset ${assetId} to user ${newOwnerId}`);
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         Assets
//       </Typography>

//       <TableContainer component={Paper} elevation={3}>
//         <Table>
//           <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Location</TableCell>
//               <TableCell>Brand</TableCell>
//               <TableCell>Owner</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {assets.map((asset) => (
//               <TableRow key={asset.id}>
//                 <TableCell>{asset.id}</TableCell>
//                 <TableCell>
//                   <Link to={`/asset/${asset.id}`} style={{ color: '#1976d2', textDecoration: 'underline' }}>
//                     {asset.name}
//                   </Link>
//                 </TableCell>
//                 <TableCell>{asset.type}</TableCell>
//                 <TableCell>{asset.location}</TableCell>
//                 <TableCell>{asset.brand}</TableCell>
//                 <TableCell>
//                   {users.find((user) => user.id === asset.currentOwner)?.name || 'Unknown'}
//                 </TableCell>
//                 <TableCell>
//                   <Stack direction="row" spacing={1}>
//                     <Button variant="contained" color="primary" size="small">
//                       Edit
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="warning"
//                       size="small"
//                       onClick={() => handleChangeOwner(asset.id, 'newOwnerId')}
//                     >
//                       Change Owner
//                     </Button>
//                     <Button variant="contained" color="error" size="small">
//                       Disable
//                     </Button>
//                   </Stack>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default Assets;

import React, { useState } from 'react';
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
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { assets as initialAssets, users } from '../data/dummyData';
import { Link } from 'react-router-dom';

const Assets = () => {
  const [assetList, setAssetList] = useState(initialAssets);
  const [editingId, setEditingId] = useState(null);
  const [editedAsset, setEditedAsset] = useState({});

  const handleEdit = (asset) => {
    setEditingId(asset.id);
    setEditedAsset({ ...asset });
  };

  const handleChange = (field, value) => {
    setEditedAsset((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const updated = assetList.map((a) =>
      a.id === editingId ? editedAsset : a
    );
    setAssetList(updated);
    setEditingId(null);
    setEditedAsset({});
  };

  const handleDisable = (id) => {
    const updated = assetList.map((a) =>
      a.id === id ? { ...a, isActive: false } : a
    );
    setAssetList(updated);
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
            {assetList.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell>{asset.id}</TableCell>
                <TableCell>
                  {editingId === asset.id ? (
                    <TextField
                      size="small"
                      value={editedAsset.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                  ) : (
                    <Link
                      to={`/asset/${asset.id}`}
                      style={{ color: '#1976d2', textDecoration: 'underline' }}
                    >
                      {asset.name}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {editingId === asset.id ? (
                    <TextField
                      size="small"
                      value={editedAsset.type}
                      onChange={(e) => handleChange('type', e.target.value)}
                    />
                  ) : (
                    asset.type
                  )}
                </TableCell>
                <TableCell>
                  {editingId === asset.id ? (
                    <TextField
                      size="small"
                      value={editedAsset.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                    />
                  ) : (
                    asset.location
                  )}
                </TableCell>
                <TableCell>
                  {editingId === asset.id ? (
                    <TextField
                      size="small"
                      value={editedAsset.brand}
                      onChange={(e) => handleChange('brand', e.target.value)}
                    />
                  ) : (
                    asset.brand
                  )}
                </TableCell>
                <TableCell>
                  {editingId === asset.id ? (
                    <Select
                      size="small"
                      value={editedAsset.currentOwner}
                      onChange={(e) =>
                        handleChange('currentOwner', e.target.value)
                      }
                    >
                      {users.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                          {user.name}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    users.find((u) => u.id === asset.currentOwner)?.name ||
                    'Unknown'
                  )}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    {editingId === asset.id ? (
                      <>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={handleSave}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outlined"
                          color="inherit"
                          size="small"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => handleEdit(asset)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="warning"
                          size="small"
                          onClick={() =>
                            handleEdit({ ...asset, currentOwner: asset.currentOwner })
                          }
                        >
                          Change Owner
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          disabled={!asset.isActive}
                          onClick={() => handleDisable(asset.id)}
                        >
                          Disable
                        </Button>
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
