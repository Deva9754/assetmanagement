
import React, { useState } from "react";
import { assets as initialAssets, users, transactions as initialTransactions } from "../data/dummyData";
import useUserRole from "../hooks/useUserRole";
import { auth } from "../firebase/firebaseConfig";
import {
  Card,
  CardContent,
  Typography,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button, 
  Alert,
  Grid,
} from "@mui/material";

const TransferAsset = () => {
  const role = useUserRole();
  const [assets, setAssets] = useState(initialAssets);
  const [transactions, setTransactions] = useState(initialTransactions || []);
  const [selectedAssetId, setSelectedAssetId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [message, setMessage] = useState("");

  const currentUserUid = auth.currentUser?.uid;
  const currentUser = users.find((u) => u.uid === currentUserUid);

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!selectedAssetId || !selectedUserId) {
      setMessage("Please select both an asset and a user.");
      return;
    }

    const assetIndex = assets.findIndex((a) => a.id === parseInt(selectedAssetId));
    if (assetIndex === -1) {
      setMessage("Asset not found.");
      return;
    }

    const newOwnerId = parseInt(selectedUserId);
    const asset = assets[assetIndex];
    const oldOwnerId = asset.currentOwner;
    const newOwner = users.find((u) => u.id === newOwnerId);

    const updatedAssets = [...assets];
    updatedAssets[assetIndex] = {
      ...asset,
      currentOwner: newOwnerId,
    };
    setAssets(updatedAssets);

    const newTransaction = {
      id: transactions.length + 1,
      assetId: asset.id,
      fromUserId: oldOwnerId,
      toUserId: newOwnerId,
      timestamp: new Date().toISOString(),
    };
    setTransactions([...transactions, newTransaction]);

    setMessage(`Asset "${asset.name}" transferred to ${newOwner.name}.`);
    setSelectedAssetId("");
    setSelectedUserId("");
  };

  if (!role) return <div className="p-6">Loading...</div>;

  if (role === "user") {
    const myAssets = assets.filter((a) => a.currentOwner === currentUser?.id);
    return (
      <Box p={4}>
        <Typography variant="h5" gutterBottom>
          My Assigned Assets
        </Typography>
        <Grid container spacing={2}>
          {myAssets.map((asset) => (
            <Grid item xs={12} md={6} key={asset.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{asset.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {asset.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description: {asset.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {myAssets.length === 0 && (
            <Typography variant="body1" color="text.secondary">
              No assets assigned to you.
            </Typography>
          )}
        </Grid>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Transfer Asset Ownership
      </Typography>

      {message && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {message}
        </Alert>
      )}

      <Box component="form" onSubmit={handleTransfer} sx={{ mb: 4 }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select Asset</InputLabel>
          <Select
            value={selectedAssetId}
            label="Select Asset"
            onChange={(e) => setSelectedAssetId(e.target.value)}
          >
            <MenuItem value="">-- Choose an Asset --</MenuItem>
            {assets.map((asset) => (
             <MenuItem key={asset.id} value={asset.id}>
             {asset.name}
           </MenuItem>
           
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select New Owner</InputLabel>
          <Select
            value={selectedUserId}
            label="Select New Owner"
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <MenuItem value="">-- Choose a User --</MenuItem>
            {users
              .filter((u) => u.role === "user")
              .map((user) => (
                <MenuItem key={user.id} value={user.id}>
  {user.name}
</MenuItem>

              ))}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Transfer
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom>
        Transaction Logs
      </Typography>
      <Grid container spacing={2}>
        {transactions.map((txn) => {
          const fromUser = users.find((u) => u.id === txn.fromUserId);
          const toUser = users.find((u) => u.id === txn.toUserId);
          const asset = assets.find((a) => a.id === txn.assetId);

          return (
            <Grid item xs={12} md={6} key={txn.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {asset?.name || `Asset #${txn.assetId}`}
                  </Typography>
                  <Typography variant="body2">
                    <strong>From:</strong> {fromUser?.name || "System"}
                  </Typography>
                  <Typography variant="body2">
                    <strong>To:</strong> {toUser?.name || "Unknown"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(txn.timestamp).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TransferAsset;


