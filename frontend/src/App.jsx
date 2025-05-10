import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Pharmacy from "./components/Pharmacy";
import Doctor from "./components/Doctor";
import Appointment from "./components/Appointment";
import Patient from "./components/Patient";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminPage from "./components/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPage"; // ✅ Import LandingPage
import HelpCenter from "./components/HelpCenter";

function App() {
  return (
    <Routes>
      {/* Landing Page Route */}
      <Route path="/" element={<LandingPage />} />

      {/* Protected Dashboard Route */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["user", "doctor", "admin"]}
            alertMessage="You must be logged in to access the dashboard."
          />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Protected Doctor Route */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["doctor", "admin"]}
            alertMessage="You are not authorized to access this page."
          />
        }
      >
        <Route path="/doctor" element={<Doctor />} />
      </Route>

      {/* Protected Appointment Route */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["patient", "admin"]}
            alertMessage="You are not authorized to access this page."
          />
        }
      >
        <Route path="/appointment" element={<Appointment />} />
      </Route>

      <Route path="/patient" element={<Patient />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Admin Route */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["admin"]}
            alertMessage="You are not an admin."
          />
        }
      >
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
