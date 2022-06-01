import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Login/Register/Register";
import HomePage from "./Pages/HomePage/HomePage/HomePage";
import Appointment from "./Pages/Appointments/Appointment/Appointment";
import Dashboard from "./Pages/Admin/DashBoard/Dashboard";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import ParentHome from "./Pages/Parents/ParentHome/ParentHome";
import Review from "./Pages/Parents/Review/Review";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            {/* Login\Logout */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Homepage */}
            <Route exact path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/appointment" element={<Appointment />} />

            {/* Admin DashBoard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Parent Routes */}
            <Route exact path="/parenthome" element={<ParentHome />} />
            <Route exact path="/parentreview" element={<Review />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
