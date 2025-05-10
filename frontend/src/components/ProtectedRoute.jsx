import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, alertMessage }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists
  const userRole = localStorage.getItem("role"); // Get user role from localStorage

  console.log("ProtectedRoute - Is Authenticated:", isAuthenticated);
  console.log("ProtectedRoute - User Role:", userRole);
  console.log("ProtectedRoute - Allowed Roles:", allowedRoles);

  if (!isAuthenticated) {
    alert(alertMessage || "You must be logged in to access this page.");
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    alert(alertMessage || "You do not have permission to access this page.");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
