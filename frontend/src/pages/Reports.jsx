// src/pages/Reports.jsx
import React, { useState } from "react";
import { assets } from "../data/dummyData";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <table className="w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Asset Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Brand</th>
            <th className="border p-2">Current Owner</th>
          </tr>
        </thead>
        <tbody>
          {filteredAssets.length > 0 ? (
            filteredAssets.map((asset) => (
              <tr key={asset.id}>
                <td
                  className="border p-2 text-blue-600 cursor-pointer hover:underline"
                  onClick={() => navigate(`/assets/${asset.id}`)}
                >
                  {asset.name}
                </td>
                <td className="border p-2">{asset.type}</td>
                <td className="border p-2">{asset.brand}</td>
                <td className="border p-2">{asset.currentOwner}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-4 text-center" colSpan={4}>
                No assets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
