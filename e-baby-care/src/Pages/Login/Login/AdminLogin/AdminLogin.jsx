import React, { useState } from "react";

import {  useNavigate } from "react-router-dom";
import {  Button,  TextField, Typography } from "@mui/material";

import GoogleButton from "react-google-button";
import useAuth from "../../../../Hooks/useAuth";
import { Container } from "@mui/material";
import { Alert } from "@mui/material";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
      console.log("Loged in");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="Dashboard-App ">
        <Container sx={{marginLeft:'15%'}}>
          <Typography variant="h4" component="h2">
            Admin Login
          </Typography>
          <Typography variant="body1" sx={{fontWeight:'bold'}} component="h1">
            e<span style={{color:'orange'}}>Baby</span>Care
          </Typography>
          {/* <form onSubmit={handleLogin}> */}
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              // onBlur={handleOnChange}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
            />
            <br />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="fstandard-basic"
              label="Password"
              type="password"
              name="password"
              // onBlur={handleOnChange}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              variant="standard"
            />
            <br />
            <Button
              sx={{ width: "75%", m: 1,backgroundColor:'hotpink', marginTop:'1rem' }}
              type="submit"
              variant="contained"
            >
              {" "}
              Login
            </Button>

            {user?.email && <Alert severity="success">This is a success</Alert>}
            {error && <Alert severity="error">{error}!</Alert>}
          </form>
          <p>---------------</p>
          {/* <Button variant="contained" onClick={handleGoogleSignIn}>
              Google
            </Button> */}
          <div>
            <GoogleButton
              className="g-btn "
              type="dark"
              onClick={handleGoogleSignIn}
             
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default AdminLogin;
