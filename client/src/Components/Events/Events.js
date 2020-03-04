import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Events.css";

export class Events extends Component {
  render() {
    const events = this.props.eventData.map(event => {
      return (
        <div
          key={event._id}
          className="test555"
          // to={event._id}
        >
          {event.description} {event.eventTime}
        </div>
      );
    });
    return (
      <div className="test">
        <div className="proba">{events}</div>
      </div>
    );
  }
}

export default Events;
