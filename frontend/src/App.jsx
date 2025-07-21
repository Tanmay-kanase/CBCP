"use client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";

// Public Pages
import LandingPage from "./pages/public/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

// Creator Pages
import CreatorDashboard from "./pages/creator/CreatorDashboard";
import CreatorProfile from "./pages/creator/CreatorProfile";
import CreatorRequests from "./pages/creator/CreatorRequests";
import CreatorEarnings from "./pages/creator/CreatorEarnings";

// Business Pages
import BusinessDashboard from "./pages/business/BusinessDashboard";
import CreatorSearch from "./pages/business/CreatorSearch";
import BusinessRequests from "./pages/business/BusinessRequests";
import BusinessPayments from "./pages/business/BusinessPayments";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminAnalytics from "./pages/admin/AdminAnalytics";

// Components
import Navbar from "./components/layout/Navbar";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function AppRoutes() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Creator Routes */}
        <Route
          path="/creator"
          element={
            <ProtectedRoute allowedRoles={["creator"]}>
              <CreatorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/creator/profile"
          element={
            <ProtectedRoute allowedRoles={["creator"]}>
              <CreatorProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/creator/requests"
          element={
            <ProtectedRoute allowedRoles={["creator"]}>
              <CreatorRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/creator/earnings"
          element={
            <ProtectedRoute allowedRoles={["creator"]}>
              <CreatorEarnings />
            </ProtectedRoute>
          }
        />

        {/* Business Routes */}
        <Route
          path="/business"
          element={
            <ProtectedRoute allowedRoles={["business"]}>
              <BusinessDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/search"
          element={
            <ProtectedRoute allowedRoles={["business"]}>
              <CreatorSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/requests"
          element={
            <ProtectedRoute allowedRoles={["business"]}>
              <BusinessRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/payments"
          element={
            <ProtectedRoute allowedRoles={["business"]}>
              <BusinessPayments />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/payments"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminPayments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminAnalytics />
            </ProtectedRoute>
          }
        />

        {/* Redirect based on user role */}
        <Route
          path="/dashboard"
          element={
            user ? (
              user.role === "creator" ? (
                <Navigate to="/creator" />
              ) : user.role === "business" ? (
                <Navigate to="/business" />
              ) : user.role === "admin" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
