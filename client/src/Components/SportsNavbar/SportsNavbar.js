import React, { Component } from "react";
import "./SportsNavbar.css";
export class SportsNavbar extends Component {
  render() {
    return (
      <div className="sportsNavbar">
        <div className="sportsNavbarItem">
          <button>Events</button>
        </div>

        <div className="vl"></div>

        <div className="sportsNavbarItem">
          <button
            name="football"
            onClick={this.props.handleOnClickSportsFilter}
          >
            Football
          </button>
        </div>

        <div className="vl"></div>

        <div className="sportsNavbarItem">
          <button
            name="basketball"
            onClick={this.props.handleOnClickSportsFilter}
          >
            Basketball
          </button>
        </div>

        <div className="vl"></div>

        <div className="sportsNavbarItem">
          <button name="tennis" onClick={this.props.handleOnClickSportsFilter}>
            Tennis
          </button>
        </div>
      </div>
    );
  }
}

export default SportsNavbar;
