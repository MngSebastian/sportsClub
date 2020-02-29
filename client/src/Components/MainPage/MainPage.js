import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    console.log("MAINPAGE CONSOLE TEST");
    return (
      <div>
        <div className="homePage">
          <div className="mainPage">
            <div className="mainPageInfo">
              <h3 className="mainHeading">
                Play sports.<br></br> Make friends.
              </h3>
              <hr className="line"></hr>

              <Link to="/sports" className="mainPageBtn">
                Start playing
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
