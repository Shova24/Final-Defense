import React from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {/* <Link to="/appointment">
            <Button color="inherit">Appointment</Button>
          </Link> */}
          <Link to="/appointment">
            {" "}
            <Button color="inherit">Appointment</Button>
          </Link>
          {/* <NavLink to="login">
            <Button color="inherit">Login</Button>
          </NavLink> */}
          {user?.email ? (
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          ) : (
            <NavLink to="/login">
              <Button style={{ textDecoration: "none", color: "white" }}>
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
