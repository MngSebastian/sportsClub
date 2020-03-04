import React, { Component } from "react";
import Map from "../Map/Map";

export default class SportsPage extends Component {
  state = {};

  render() {
    return (
      <div className="MAP">
        <Map setUser={this.props.setUser} user={this.props.user} />
      </div>
    );
  }
}
