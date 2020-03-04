import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class Navbar extends React.Component {
  state = {
    PopUpLogin: false,
    PopUpSignup: false
  };

  notifyLogout = () => {
    toast.success("Successfull logout", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true
    });
  };

  logout = () => {
    axios.delete("/auth/logout").then(() => {
      this.props.setUser(null);
      this.notifyLogout()
    });
  };

  onClickPopUpLogin = () => {
    this.setState({
      PopUpLogin: !this.state.PopUpLogin
    });
  };

  onClickPopUpSignup = () => {
    this.setState({
      PopUpSignup: !this.state.PopUpSignup
    });
  };

  render() {
    if (this.props.user) {
      return (
        <div>
          <nav className="navbar">
            <div className="login-register">
              <Link to="/" className="navbarItems">
                sportsClub
              </Link>
            </div>
            <div className="login-register">
              <Link className="navbarItems">{this.props.user.username}</Link>
              <Link onClick={this.logout} to="/" className="navbarItems">
                Logout
              </Link>
            </div>
          </nav>
        </div>
      );
    }
    return (
      <div>
        <nav className="navbar">
          <div className="login-register">
            <Link to="/" className="navbarItems">
              sportsClub
            </Link>
          </div>
          <div className="login-register">
            <Link
              onClick={() => this.onClickPopUpLogin()}
              className="navbarItems"
            >
              Login
            </Link>
            <Link
              onClick={() => this.onClickPopUpSignup()}
              className="navbarItems"
            >
              Signup
            </Link>
          </div>
        </nav>
        {this.state.PopUpLogin ? (
          <Login
            popupBoolean={this.onClickPopUpLogin}
            setUser={this.props.setUser}
          />
        ) : (
          ""
        )}
        {this.state.PopUpSignup ? <Signup setUser={this.props.setUser} /> : ""}
      </div>
    );
  }
}

export default Navbar;
