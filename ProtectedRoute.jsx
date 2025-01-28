import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role, allowedRoles }) => {
  // Check if the user's role is in the list of allowed roles
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />; // Redirect unauthorized users to login
  }

  return children; // Render the children (protected component)
};

export default ProtectedRoute;
