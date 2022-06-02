import { UilEstate } from "@iconscout/react-unicons";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";

import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import useAuth from "../../../Hooks/useAuth";
import Cover from "../../../img/HomePage/Cover2.png";

import GoogleButton from "react-google-button";

const Login = () => {
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
      navigate("/home");
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
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container>
        <NavLink to="/">
          <Button
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <UilEstate /> Homepage
          </Button>
        </NavLink>

        <Grid container spacing={2}>
          <Grid sx={{ mt: 8 }} item xs={12} md={6}>
            <Typography variant="body1" component="h2">
              Login
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
              <NavLink to="/register">
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="text"
                >
                  {" "}
                  new user?
                </Button>{" "}
              </NavLink>
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                {" "}
                Login
              </Button>

              {user?.email && (
                <Alert severity="success">This is a success</Alert>
              )}
              {error && <Alert severity="error">{error}!</Alert>}
            </form>
            <p>---------------</p>
            {/* <Button variant="contained" onClick={handleGoogleSignIn}>
              Google
            </Button> */}
            <div>
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={Cover} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
