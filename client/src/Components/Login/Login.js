import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import { Redirect } from "react-router-dom";

// const signupLogin = props => {
//   return (
//     <div className="PopUp">
//       <div className="PopUpInside">
//         <h1 className="heading">Login</h1>
//         <form>
//           <input />
//         </form>
//       </div>
//     </div>
//   );
// };
// export default signupLogin;

export default class Login extends Component {
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
    console.log("SUBMIT clicked");
    axios
      .post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        // redirect
        this.setState({
          redirect: true
        });
        this.props.history.push("/");
        console.log(this.props.history);
        // update state for user in <App/>
        console.log(response);
        this.props.setUser(response.data);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="PopUp">
        <div className="PopUpInside">
          <div class="headingDiv">
            <h1 className="heading">Login</h1>
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

            <button type="submit">Login</button>
          </form>
          {this.state.message && <p>{this.state.message}</p>}
        </div>
      </div>
    );
  }
}
