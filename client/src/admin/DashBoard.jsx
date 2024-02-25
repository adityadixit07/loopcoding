import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AdminlogOut } from "../redux/adminSlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(AdminlogOut());
    navigate("/courses");
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-lg font-semibold">Admin Panel</h1>
        </div>
        <ul className="mt-6">
          <li className="pl-4 py-2 flex items-center space-x-2">
            <FaHome className="text-gray-600" />
            <Link to="/">Home</Link>
          </li>
          <li className="pl-4 py-2 flex items-center space-x-2">
            <FaUser className="text-gray-600" />
            <Link to="/users">Users</Link>
          </li>
          <li className="pl-4 py-2 flex items-center space-x-2">
            <FaChalkboardTeacher className="text-gray-600" />
            <Link to="/courses">Courses</Link>
          </li>
          <li className="pl-4 py-2 flex items-center space-x-2">
            <FaCog className="text-gray-600" />
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <div className="absolute bottom-0 w-full border-t">
          <button
            className="w-full py-2 flex items-center justify-center space-x-2 text-gray-600"
            onClick={logOut}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome, Admin!</h1>
        <p className="text-gray-600">
          This is your admin dashboard. You can manage users, courses, and
          settings from the sidebar.
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
