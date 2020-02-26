import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";

export class App extends React.Component {
  render() {
    return (
      <div className="test">
        <Navbar></Navbar>
        <MainPage></MainPage>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
