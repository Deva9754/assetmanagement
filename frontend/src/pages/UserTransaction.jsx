// src/pages/UserTransaction.jsx
import React from "react";
import { transactions } from "../data/dummyData";

const UserTransaction = () => {
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);
    return isNaN(date) ? "Invalid date" : date.toLocaleString();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">User Transactions</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">Transaction ID</th>
            <th className="border p-2">Asset Name</th>
            <th className="border p-2">From</th>
            <th className="border p-2">To</th>
            <th className="border p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td className="border p-2">{tx.id}</td>
              <td className="border p-2">{tx.assetName}</td>
              <td className="border p-2">{tx.from}</td>
              <td className="border p-2">{tx.to}</td>
              <td className="border p-2">{formatDate(tx.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTransaction;
