import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Cover from "../../../img/HomePage/Cover2.png";

import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }; //copying
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };

  const handleLogin = (e) => {
    if (loginData.password !== loginData.password2) {
      alert(" password did not matched");
      return;
    }
    console.log("User : ", loginData.email, loginData.password);
    registerUser(loginData.email, loginData.password, loginData.name);
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 8 }} item xs={12} md={6}>
            <Typography variant="body1" component="h2">
              Register Yourself
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLogin}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="fstandard-basic"
                  label="Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  autoComplete="current-password"
                  variant="standard"
                />
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="fstandard-basic"
                  label="Retype Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  autoComplete="current-password"
                  variant="standard"
                />
                <br />
                <NavLink to="/login">
                  <Button
                    sx={{ width: "75%", m: 1 }}
                    type="submit"
                    variant="text"
                  >
                    {" "}
                    Already Register?
                  </Button>{" "}
                </NavLink>
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  {" "}
                  Register
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress disableShrink />};
            {user?.email && (
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
            )}
            {authError && <Alert severity="error">{authError}!</Alert>};
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={Cover} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;