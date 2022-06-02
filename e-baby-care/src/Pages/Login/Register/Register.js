import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Cover from "../../../img/HomePage/Cover2.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //Registration
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 8 }} item xs={12} md={6}>
            <Typography variant="body1" component="h2">
              Register Yourself
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
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
                onChange={(e) => setPassword(e.target.value)}
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
            {error && <Alert severity="error">{error}!</Alert>}
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
