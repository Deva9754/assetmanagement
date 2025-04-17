// // src/pages/TransferAsset.jsx
// import React, { useState } from "react";
// import { assets, users } from "../data/dummyData";

// const TransferAsset = () => {
//   const [selectedAssetId, setSelectedAssetId] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState("");
//   const [message, setMessage] = useState("");

//   const handleTransfer = (e) => {
//     e.preventDefault();
//     if (!selectedAssetId || !selectedUserId) {
//       setMessage("Please select both an asset and a user.");
//       return;
//     }

//     const asset = assets.find((a) => a.id === parseInt(selectedAssetId));
//     const user = users.find((u) => u.id === parseInt(selectedUserId));

//     // Dummy simulation
//     setMessage(`Asset "${asset.name}" transferred to ${user.name}.`);

//     // Reset
//     setSelectedAssetId("");
//     setSelectedUserId("");
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Transfer Asset Ownership</h2>

//       {message && <div className="mb-4 text-green-600 font-semibold">{message}</div>}

//       <form onSubmit={handleTransfer} className="space-y-4">
//         <div>
//           <label className="block mb-1 font-medium">Select Asset</label>
//           <select
//             value={selectedAssetId}
//             onChange={(e) => setSelectedAssetId(e.target.value)}
//             className="w-full border p-2 rounded"
//           >
//             <option value="">-- Choose an Asset --</option>
//             {assets.map((asset) => (
//               <option key={asset.id} value={asset.id}>
//                 {asset.name} ({asset.type})
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Select New Owner</label>
//           <select
//             value={selectedUserId}
//             onChange={(e) => setSelectedUserId(e.target.value)}
//             className="w-full border p-2 rounded"
//           >
//             <option value="">-- Choose a User --</option>
//             {users
//               .filter((user) => user.role === "user")
//               .map((user) => (
//                 <option key={user.id} value={user.id}>
//                   {user.name} ({user.email})
//                 </option>
//               ))}
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Transfer
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TransferAsset;


import React, { useState } from "react";
import { assets as initialAssets, users, transactions as initialTransactions } from "../data/dummyData";

const TransferAsset = () => {
  const [assets, setAssets] = useState(initialAssets);
  const [transactions, setTransactions] = useState(initialTransactions || []);
  const [selectedAssetId, setSelectedAssetId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [message, setMessage] = useState("");

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
    const user = users.find((u) => u.id === newOwnerId);

    // Update current owner
    const updatedAssets = [...assets];
    updatedAssets[assetIndex] = {
      ...asset,
      currentOwner: newOwnerId,
    };
    setAssets(updatedAssets);

    // Log the transaction
    const newTransaction = {
      id: transactions.length + 1,
      assetId: asset.id,
      fromUserId: oldOwnerId,
      toUserId: newOwnerId,
      timestamp: new Date().toISOString(),
    };
    setTransactions([...transactions, newTransaction]);

    // Message
    setMessage(`Asset "${asset.name}" transferred to ${user.name}.`);

    // Reset
    setSelectedAssetId("");
    setSelectedUserId("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Transfer Asset Ownership</h2>

      {message && <div className="mb-4 text-green-600 font-semibold">{message}</div>}

      <form onSubmit={handleTransfer} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Select Asset</label>
          <select
            value={selectedAssetId}
            onChange={(e) => setSelectedAssetId(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Choose an Asset --</option>
            {assets.map((asset) => (
              <option key={asset.id} value={asset.id}>
                {asset.name} ({asset.type})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Select New Owner</label>
          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Choose a User --</option>
            {users
              .filter((user) => user.role === "user")
              .map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.email})
                </option>
              ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Transfer
        </button>
      </form>

      {/* Optional: Display Transaction Logs */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Transaction Logs</h3>
        <ul className="space-y-2 text-sm">
          {transactions.map((txn) => (
            <li key={txn.id} className="bg-gray-100 p-2 rounded">
              Asset #{txn.assetId} transferred from{" "}
              {users.find((u) => u.id === txn.fromUserId)?.name || "Unknown"} to{" "}
              {users.find((u) => u.id === txn.toUserId)?.name || "Unknown"} on{" "}
              {new Date(txn.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferAsset;
