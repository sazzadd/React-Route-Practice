import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  return (
    <div>
      <div className="user-card max-w-sm mx-auto my-6 p-6 bg-gradient-to-br from-indigo-100 via-white to-pink-100 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border border-gray-200">
        <div className="user-info text-center">
          <h2 className="user-name text-2xl font-semibold text-gray-800 mb-2">
            {user.name}
          </h2>
          <p className="user-id text-sm text-gray-500 mb-1">ID: {user.id}</p>
          <p className="user-email text-gray-600 mb-4">Email: {user.email}</p>
          <Link
            className="link-button inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-6 rounded-full hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
            to={`/user/${user.id}`}
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
