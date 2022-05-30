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
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
