import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("protected users : ", user);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
