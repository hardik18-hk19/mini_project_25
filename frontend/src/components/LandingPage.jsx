import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#E0FFFF]">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to the Hospital Management System
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        A comprehensive solution to manage hospital operations, streamline
        workflows, and enhance patient care.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-[#17C3B2] text-white rounded-lg"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-2 bg-[#FF6B6B] text-white rounded-lg"
        >
          Sign Up
        </Link>
      </div>
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Efficiently manage patient records and appointments</li>
          <li>Track and manage pharmacy inventory and billing</li>
          <li>Streamline doctor and staff scheduling</li>
          <li>
            Generate detailed reports and analytics for better decision-making
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
