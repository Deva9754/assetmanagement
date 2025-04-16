// src/pages/AssetDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../data/dummyData";

const AssetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const asset = assets.find((a) => a.id.toString() === id);

  if (!asset) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-red-600">Asset not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Asset Details</h2>
      <ul className="space-y-2">
        <li><strong>ID:</strong> {asset.id}</li>
        <li><strong>Name:</strong> {asset.name}</li>
        <li><strong>Type:</strong> {asset.type}</li>
        <li><strong>Brand:</strong> {asset.brand}</li>
        <li><strong>Location:</strong> {asset.location}</li>
        <li><strong>Purchase Year:</strong> {asset.purchaseYear}</li>
        <li><strong>Current Owner:</strong> {asset.currentOwner}</li>
        <li><strong>Status:</strong> {asset.isActive ? "Active" : "Inactive"}</li>
      </ul>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded"
      >
        Back to List
      </button>
    </div>
  );
};

export default AssetDetail;
