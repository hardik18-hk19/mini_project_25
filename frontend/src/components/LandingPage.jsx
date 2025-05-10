import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#E0FFFF]">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Hospital Managment App
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Manage your pharmacy, appointments, and more with ease.
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
    </div>
  );
};

export default LandingPage;
