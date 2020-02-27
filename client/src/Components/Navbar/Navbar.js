import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="navbar">
      <div className="login-register">
        <Link className="navbarItems">Home</Link>
      </div>
      <div className="login-register">
        <Link className="navbarItems">Login</Link>
        <Link to="/signup" className="navbarItems">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
