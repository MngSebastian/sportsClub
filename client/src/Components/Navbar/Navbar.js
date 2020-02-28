import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => {
  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      props.setUser(null);
    });
  };

  if (props.user) {
    return (
      <nav className="navbar">
        <div className="login-register">
          <Link to="/" className="navbarItems">
            Home
          </Link>
        </div>
        <div className="login-register">
          <Link className="navbarItems">{props.user.username}</Link>
          <Link onClick={logout} to="/" className="navbarItems">
            Logout
          </Link>
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar">
      <div className="login-register">
        <Link to="/" className="navbarItems">
          Home
        </Link>
      </div>
      <div className="login-register">
        <Link to="/login" className="navbarItems">
          Login
        </Link>
        <Link to="/signup" className="navbarItems">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
