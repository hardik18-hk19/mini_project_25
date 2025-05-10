import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaUserMd,
  FaCalendarCheck,
  FaUsers,
  FaPills,
  FaChartBar,
  FaQuestionCircle,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    setUser(null); // Update state to reflect logout
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="fixed top-0 w-full bg-white shadow-md p-4 h-16 flex items-center justify-between z-50">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold flex items-center">
          <span className="text-teal-500">You</span>
          <span className="text-gray-800">Medi</span>
        </div>
      </Link>

      {/* ✅ Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-teal-500">
          <FaHome className="inline-block mr-2" /> Home
        </Link>
        <Link to="/doctor" className="text-gray-700 hover:text-teal-500">
          <FaUserMd className="inline-block mr-2" /> Doctors
        </Link>
        <Link to="/appointment" className="text-gray-700 hover:text-teal-500">
          <FaCalendarCheck className="inline-block mr-2" /> Appointments
        </Link>
        <Link to="/patient" className="text-gray-700 hover:text-teal-500">
          <FaUsers className="inline-block mr-2" /> Patients
        </Link>
        {/* Show Pharmacy link only for admins */}
        {user?.role === "admin" && (
          <Link to="/pharmacy" className="text-gray-700 hover:text-teal-500">
            <FaPills className="inline-block mr-2" /> Pharmacy
          </Link>
        )}
        <Link to="/charts" className="text-gray-700 hover:text-teal-500">
          <FaChartBar className="inline-block mr-2" /> Charts
        </Link>
        <Link to="/help" className="text-gray-700 hover:text-teal-500">
          <FaQuestionCircle className="inline-block mr-2" /> Help
        </Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-600 flex items-center"
          >
            <FaSignOutAlt className="inline-block mr-2" /> Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-teal-500 hover:text-teal-600 flex items-center"
          >
            <FaSignInAlt className="inline-block mr-2" /> Login
          </Link>
        )}
      </div>

      {/* ✅ Hamburger Menu Button (Visible Only on Small Screens) */}
      <button
        className="text-gray-600 text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* ✅ Sidebar Dropdown (Mobile Only) */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 w-full bg-white shadow-md flex flex-col py-4 space-y-4 md:hidden px-4">
          {/* Sidebar Links */}
          <Link
            to="/"
            className="flex items-center gap-x-2 text-gray-700 hover:text-teal-500"
          >
            <FaHome className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/doctor"
            className="flex items-center gap-x-2 text-gray-700 hover:text-teal-500"
          >
            <FaUserMd className="w-5 h-5" />
            <span>Doctors</span>
          </Link>
          <Link
            to="/appointment"
            className="flex items-center gap-x-2 text-gray-700 hover:text-teal-500"
          >
            <FaCalendarCheck className="w-5 h-5" />
            <span>Appointments</span>
          </Link>
          <Link
            to="/patient"
            className="flex items-center gap-x-2 text-gray-700 hover:text-teal-500"
          >
            <FaUsers className="w-5 h-5" />
            <span>Patients</span>
          </Link>
          {/* Show Pharmacy link only for admins */}
          {user?.role === "admin" && (
            <Link
              to="/pharmacy"
              className="flex items-center gap-x-2 text-gray-700 hover:text-teal-500"
            >
              <FaPills className="w-5 h-5" />
              <span>Pharmacy</span>
            </Link>
          )}
          <Link
            to="/charts"
            className="flex items-center gap-x-2 text-gray-700 hover:text-teal-500"
          >
            <FaChartBar className="w-5 h-5" />
            <span>Charts</span>
          </Link>
          <Link
            to="/help"
            className="flex items-center gap-x-2 text-gray-700 hover:text-teal-500"
          >
            <FaQuestionCircle className="w-5 h-5" />
            <span>Help</span>
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-x-2 text-red-500 hover:text-red-600"
            >
              <FaSignOutAlt className="w-5 h-5" />
              <span>Log Out</span>
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-x-2 text-teal-500 hover:text-teal-600"
            >
              <FaSignInAlt className="w-5 h-5" />
              <span>Login</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
