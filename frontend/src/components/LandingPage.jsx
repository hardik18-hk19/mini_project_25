import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaUserMd,
  FaPills,
  FaCalendarAlt,
  FaChartBar,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#17C3B2] to-[#FF6B6B] text-white">
        {/* Title Section */}
        <div className="w-full text-center pt-30 pb-15 bg-[#003366]">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Hospital Management System
          </h1>
          <p className="text-lg mt-4 text-gray-300">
            Simplifying healthcare operations for better patient care.
          </p>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mt-10">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            Welcome to the Hospital Management System
          </h2>
          <p className="text-lg mb-8 drop-shadow-md">
            A modern solution to streamline hospital operations, manage patient
            records, and enhance healthcare services with ease.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="/login"
              className="px-8 py-3 bg-white text-[#17C3B2] font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-8 py-3 bg-white text-[#FF6B6B] font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUserMd className="text-5xl text-[#17C3B2] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Patient Management</h3>
            <p className="text-gray-700">
              Effortlessly manage patient records and appointments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaPills className="text-5xl text-[#FF6B6B] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Pharmacy Management</h3>
            <p className="text-gray-700">
              Track and manage inventory and billing.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaCalendarAlt className="text-5xl text-[#17C3B2] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Staff Scheduling</h3>
            <p className="text-gray-700">
              Streamline doctor and staff schedules.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaChartBar className="text-5xl text-[#FF6B6B] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Analytics</h3>
            <p className="text-gray-700">
              Generate detailed reports for data-driven decision-making.
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mt-16 w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#17C3B2]">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#17C3B2]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#17C3B2]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#17C3B2]"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-[#17C3B2] text-white font-bold rounded-lg hover:bg-[#149e91] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
