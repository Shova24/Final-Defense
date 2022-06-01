import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("users : ", user);

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
