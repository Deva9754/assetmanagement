// src/pages/AssetList.jsx
import React, { useState } from "react";
import { assets as dummyAssets } from "../data/dummyData";

const AssetList = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortBy, setSortBy] = useState("id");

  const handleSort = (key) => {
    setSortBy(key);
  };

  const filteredAssets = dummyAssets
    .filter((asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((asset) => (filterType === "All" ? true : asset.type === filterType))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "type") return a.type.localeCompare(b.type);
      return a.id - b.id;
    });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Assets List</h2>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <input
          type="text"
          placeholder="Search by asset name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-60"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All Types</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Books">Books</option>
          <option value="Vehicles">Vehicles</option>
        </select>

        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => handleSort("name")}
          >
            Sort by Name
          </button>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => handleSort("type")}
          >
            Sort by Type
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Brand</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Owner</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="border p-2">{asset.id}</td>
                <td className="border p-2">{asset.name}</td>
                <td className="border p-2">{asset.type}</td>
                <td className="border p-2">{asset.brand}</td>
                <td className="border p-2">{asset.location}</td>
                <td className="border p-2">{asset.currentOwner}</td>
                <td className="border p-2 flex flex-col sm:flex-row gap-2 justify-center items-center">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Disable</button>
                  <button className="text-green-600 hover:underline">Change Owner</button>
                </td>
              </tr>
            ))}
            {filteredAssets.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">
                  No assets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;
