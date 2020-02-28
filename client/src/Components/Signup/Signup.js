import React, { Component } from "react";
import axios from "axios";
// import "../Login/Login.css";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    message: ""
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
        // redirect
        // this.props.history.push("/");
        // update state for user in <App/>
        this.props.setUser(response.data);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
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

              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
        {this.state.message && <p>{this.state.message}</p>}
      </>
    );
  }
}
