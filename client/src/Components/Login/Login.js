import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import { Redirect, withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
    redirect: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        // redirect
        this.props.history.push("/");

        // update state for user in <App/>

        this.props.setUser(response.data);
        this.props.history.push("/test");
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <div className="PopUp">
        <div className="PopUpInside">
          <div className="headingDiv">
            <h1 className="heading">Login</h1>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <button type="submit">Login</button>
            </form>
          </div>
          {this.state.message && <p>{this.state.message}</p>}
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
