// src/pages/UserList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/dummyData";

const UserList = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2 capitalize">{user.role}</td>
              <td className="border p-2">
                <button
                  className="text-blue-600 underline"
                  onClick={() => navigate(`/user-transactions/${user.id}`)}
                >
                  View Transactions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
