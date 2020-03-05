import React, { Component } from "react";
import "./EventDetials.css";

export default class EventDetails extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="eventDetails">
          <div className="header">
            <p>Event Name: {this.props.eventDetails.nameOfEvent}</p>
          </div>
          <p>asd</p>
          <button>Join</button>
          <button
            onClick={() => {
              this.props.clearEventDetails();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}
