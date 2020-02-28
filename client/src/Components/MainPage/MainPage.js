import React, { Component } from "react";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="homePage">
          <div className="mainPage">
            <div className="mainPageInfo">
              <h3 className="mainHeading">
                Play sports.<br></br> Make friends.
              </h3>
              <hr className="line"></hr>

              <button className="mainPageBtn">Start playing</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
