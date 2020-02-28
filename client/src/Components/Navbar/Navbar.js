import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Login from "../Login/Login";

class Navbar extends React.Component {
  state = {
    signIn: false
  };

  logout = () => {
    axios.delete("/auth/logout").then(() => {
      this.props.setUser(null);
    });
  };

  onClickSignIn = () => {
    console.log("hello2");
    this.setState({
      signIn: !this.state.signIn
    });
  };

  render() {
    if (this.props.user) {
      return (
        <nav className="navbar">
          <div className="login-register">
            <Link to="/" className="navbarItems">
              Home
            </Link>
          </div>
          <div className="login-register">
            <Link className="navbarItems">{this.props.user.username}</Link>
            <Link onClick={this.logout} to="/" className="navbarItems">
              Logout
            </Link>
          </div>
        </nav>
      );
    }
    return (
      <div>
        <nav className="navbar">
          <div className="login-register">
            <Link to="/" className="navbarItems">
              Home
            </Link>
          </div>
          <div className="login-register" onClick={() => this.onClickSignIn()}>
            <Link className="navbarItems">Login</Link>
            <Link className="navbarItems">Signup</Link>
          </div>
        </nav>
        {this.state.signIn ? <Login /> : ""}
      </div>
    );
  }
}

export default Navbar;
