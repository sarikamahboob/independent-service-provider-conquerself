import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState();
  let location = useLocation();
  if (!user) {
    <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
