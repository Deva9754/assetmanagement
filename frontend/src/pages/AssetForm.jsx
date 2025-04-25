import React, { useState } from 'react';

const assetTypes = ['Electronics', 'Furniture', 'Books', 'Vehicles'];
const users = ['Admin', 'User1', 'User2', 'User3'];

const AssetForm = () => {
  const [formData, setFormData] = useState({
    assetName: '',
    assetType: '',
    brand: '',
    location: '',
    purchaseYear: '',
    currentOwner: 'Admin',
    isActive: true,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.assetName) newErrors.assetName = 'Asset name is required';
    if (!formData.assetType) newErrors.assetType = 'Asset type is required';
    if (!formData.brand) newErrors.brand = 'Brand is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.purchaseYear || isNaN(formData.purchaseYear)) {
      newErrors.purchaseYear = 'Valid purchase year required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log('Asset Submitted:', formData);
    alert('Asset saved successfully!');
    // Reset form
    setFormData({
      assetName: '',
      assetType: '',
      brand: '',
      location: '',
      purchaseYear: '',
      currentOwner: 'Admin',
      isActive: true,
    });
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Asset</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Asset Name */}
        <div>
          <label className="block">Asset Name</label>
          <input
            type="text"
            name="assetName"
            className="w-full border p-2 rounded"
            value={formData.assetName}
            onChange={handleChange}
          />
          {errors.assetName && <p className="text-red-500 text-sm">{errors.assetName}</p>}
        </div>

        {/* Asset Type */}
        <div>
          <label className="block">Asset Type</label>
          <select
            name="assetType"
            className="w-full border p-2 rounded"
            value={formData.assetType}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            {assetTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>
          {errors.assetType && <p className="text-red-500 text-sm">{errors.assetType}</p>}
        </div>

        {/* Brand */}
        <div>
          <label className="block">Brand</label>
          <input
            type="text"
            name="brand"
            className="w-full border p-2 rounded"
            value={formData.brand}
            onChange={handleChange}
          />
          {errors.brand && <p className="text-red-500 text-sm">{errors.brand}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="block">Location</label>
          <input
            type="text"
            name="location"
            className="w-full border p-2 rounded"
            value={formData.location}
            onChange={handleChange}
          />
          {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
        </div>

        {/* Purchase Year */}
        <div>
          <label className="block">Purchase Year</label>
          <input
            type="text"
            name="purchaseYear"
            className="w-full border p-2 rounded"
            value={formData.purchaseYear}
            onChange={handleChange}
          />
          {errors.purchaseYear && <p className="text-red-500 text-sm">{errors.purchaseYear}</p>}
        </div>

        {/* Current Owner */}
        <div>
          <label className="block">Current Owner</label>
          <select
            name="currentOwner"
            className="w-full border p-2 rounded"
            value={formData.currentOwner}
            onChange={handleChange}
          >
            {users.map((user, i) => (
              <option key={i} value={user}>{user}</option>
            ))}
          </select>
        </div>

        {/* Is Active */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          <label>Active</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Asset
        </button>
      </form>
    </div>
  );
};

export default AssetForm;
