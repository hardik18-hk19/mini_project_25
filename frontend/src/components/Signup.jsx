import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "patient",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Signup successful! Please log in.");
        navigate("/login");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 60px)", // Adjust height to account for the navbar
          background: "#17C3B2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            border: "3px solid #17C3B2",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Signup
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              onChange={handleChange}
              required
            />
            <select
              name="role"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              onChange={handleChange}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
            <button
              type="submit"
              style={{
                width: "100%",
                background: "#17C3B2",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Signup
            </button>
          </form>
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <span>Already have an account? </span>
            <Link
              to="/login"
              style={{ color: "#003366", textDecoration: "underline" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
