import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    message: ""
  };

  notifySuccess = () => {
    toast.success("Successfull signeup", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true
    });
  };

  notifyErr = () => {
    toast.error(this.state.message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/auth/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        this.props.setUser(response.data);
        this.notifySuccess();
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
        this.notifyErr();
      });
  };

  render() {
    return (
      <>
        <div className="PopUp">
          <div className="PopUpInside">
            <div className="headingDiv">
              <h1 className="heading">SignUp</h1>
            </div>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="username"> </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="inputFields"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <br></br>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  className="inputFields"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br></br>
                <button className="formBtn" type="submit">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
