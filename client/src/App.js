import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";

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

        <Footer></Footer>
        <MainPage></MainPage>
      </div>
    );
  }
}

export default App;
