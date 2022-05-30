import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Login/Register/Register";
import HomePage from "./Pages/HomePage/HomePage/HomePage";
import Appointment from "./Pages/Appointments/Appointment/Appointment";
import Dashboard from "./Pages/Admin/DashBoard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* Login\Logout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Homepage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<Appointment />} />

          {/* Admin DashBoard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
