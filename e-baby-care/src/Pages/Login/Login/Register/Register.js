import { Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cover from "../../../../img/HomePage/Cover2.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }; //copying
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field, value, newLoginData);
  };
  const handleLogin = (e) => {
    if (loginData.password !== loginData.password2) {
      alert(" password did not matched");
    }
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
            <form onSubmit={handleLogin}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="fstandard-basic"
                label="Password"
                type="password"
                name="password"
                onChange={handleOnChange}
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
                onChange={handleOnChange}
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
            ;
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
