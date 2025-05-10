import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, alertMessage }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Example: Check if token exists
  const userRole = localStorage.getItem("role"); // Example: Get user role from localStorage

  if (!isAuthenticated) {
    alert(alertMessage || "You must be logged in to access this page.");
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    alert(alertMessage || "You do not have permission to access this page.");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
