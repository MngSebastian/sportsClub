import React, { Component } from "react";
import "./SportsNavbar.css";
export class SportsNavbar extends Component {
  render() {
    return (
      <div className="sportsNavbar">
        <div onClick={this.props.popupBoolean} className="sportsNavbarItem">
          <button>Events</button>
        </div>
        <div className="vl"></div>

        <div
          onClick={this.props.handleOnClickSportsFilter}
          className="sportsNavbarItem"
        >
          <button name="football">Football</button>
        </div>

        <div className="vl"></div>

        <div
          onClick={this.props.handleOnClickSportsFilter}
          className="sportsNavbarItem"
        >
          <button name="basketball">Basketball</button>
        </div>

        <div className="vl"></div>

        <div
          onClick={this.props.handleOnClickSportsFilter}
          className="sportsNavbarItem"
        >
          <button name="tennis">Tennis</button>
        </div>
      </div>
    );
  }
}

export default SportsNavbar;
