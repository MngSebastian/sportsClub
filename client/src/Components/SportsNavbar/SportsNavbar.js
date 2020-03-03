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
          <button>Football</button>
        </div>

        <div className="vl"></div>

        <div className="sportsNavbarItem">
          <button>Basketball</button>
        </div>

        <div className="vl"></div>

        <div className="sportsNavbarItem">
          <button>Tennis</button>
        </div>
      </div>
    );
  }
}

export default SportsNavbar;
