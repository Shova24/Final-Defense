import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import HomePage from "./Pages/HomePage/HomePage/HomePage";
import Appointment from "./Pages/Appointments/Appointment/Appointment";
import Dashboard from "./Pages/Admin/DashBoard/Dashboard";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import ParentHome from "./Pages/Parents/ParentHome/ParentHome";
import Review from "./Pages/Parents/Review/Review";
import ProtectedRoute from "./Pages/Login/ProtectedRouter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Login\Logout */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Homepage */}
            <Route exact path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />

            {/* Admin DashBoard */}
            <Route
              exact
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Parent Routes */}
            <Route
              exact
              path="/parenthome"
              element={
                <ProtectedRoute>
                  <ParentHome />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/parentreview"
              element={
                <ProtectedRoute>
                  <Review />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
