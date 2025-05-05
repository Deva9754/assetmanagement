


import React, { useState } from "react";
import { assets, users, transactions, assetTypes } from "../data/dummyData";
import { useNavigate } from "react-router-dom";
import useUserRole from "../hooks/useUserRole"; 
import { auth } from "../firebase/firebaseConfig"; 

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const navigate = useNavigate();
  const role = useUserRole();
  const currentUser = auth.currentUser;

  const getAssetTypeName = (typeId) => {
    return assetTypes.find((type) => type.id === typeId)?.name || "Unknown";
  };

  const getUserName = (userId) => {
    return users.find((user) => user.id === userId)?.name || "Unknown";
  };

  const filteredAssets = assets.filter((asset) => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (role === "admin") return matchesSearch;
    return matchesSearch && asset.currentOwnerId === currentUser?.uid;
  });

  // Filter transactions for selected user
  const selectedUserTransactions = selectedUserId
    ? transactions.filter(
        (tx) => tx.fromUserId === selectedUserId || tx.toUserId === selectedUserId
      )
    : [];

  if (!role) {
    return <div className="p-6">Loading reports...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Asset Reports</h2>

      <input
        type="text"
        placeholder="Search asset by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-md"
      />

      <table className="w-full bg-white border rounded shadow mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Asset Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Brand</th>
            {role === "admin" && <th className="border p-2">Current Owner</th>}
          </tr>
        </thead>
        <tbody>
          {filteredAssets.length > 0 ? (
            filteredAssets.map((asset) => (
              <tr key={asset.id}>
                <td
                  className="border p-2 text-blue-600 cursor-pointer hover:underline"
                  onClick={() => navigate(`/asset/${asset.id}`)}
                >
                  {asset.name}
                </td>
                <td className="border p-2">{getAssetTypeName(asset.typeId)}</td>
                <td className="border p-2">{asset.brand}</td>
                {role === "admin" && (
                  <td className="border p-2">{getUserName(asset.currentOwnerId)}</td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-4 text-center" colSpan={role === "admin" ? 4 : 3}>
                No assets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {role === "admin" && (
        <>
          <h2 className="text-2xl font-bold mb-4">Users</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="border p-3 rounded bg-white shadow cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedUserId(user.id)}
              >
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500 capitalize">{user.role}</p>
              </div>
            ))}
          </div>

          {selectedUserId && (
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Transactions for {getUserName(selectedUserId)}
              </h3>
              {selectedUserTransactions.length > 0 ? (
                <table className="w-full bg-white border rounded shadow">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2">Asset Name</th>
                      <th className="border p-2">From</th>
                      <th className="border p-2">To</th>
                      <th className="border p-2">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUserTransactions.map((tx) => {
                      const asset = assets.find((a) => a.id === tx.assetId);
                      return (
                        <tr key={tx.id}>
                          <td className="border p-2">{asset?.name || "Unknown"}</td>
                          <td className="border p-2">{getUserName(tx.fromUserId)}</td>
                          <td className="border p-2">{getUserName(tx.toUserId)}</td>
                          <td className="border p-2">
                            {new Date(tx.timestamp).toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-600">No transactions found for this user.</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Reports;
