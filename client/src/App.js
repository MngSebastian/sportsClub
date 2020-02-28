import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Footer></Footer>
        <MainPage></MainPage>
      </div>
    );
  }
}

export default App;
