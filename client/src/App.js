import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";

export class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  render() {
    return (
      <div className="test">
        <Navbar setUser={this.setUser} user={this.state.user} />
        <Route
          path="/signup"
          render={props => (
            <Signup history={props.history} setUser={this.setUser} />
          )}
        />
        <Route
          path="/login"
          render={props => (
            <Login history={props.history} setUser={this.setUser} />
          )}
        />
        <MainPage></MainPage>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
