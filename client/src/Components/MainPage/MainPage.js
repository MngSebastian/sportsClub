import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MainPage.css";
import PopUp from "../Login-Signup/signup-login";

class MainPage extends Component {
  state = {
    renderPopUp: true
  };

  render() {
    return (
      <div>
        <div className="homePage">
          <div className="mainPage">
            <div className="mainPageInfo">
              <h3 className="mainHeading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h3>

              <button className="mainPageBtn">Start playing</button>
            </div>
          </div>
        </div>
        {this.state.renderPopUp ? <PopUp /> : ""}
      </div>
    );
  }
}
export default MainPage;
