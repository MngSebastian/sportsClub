import React, { Component } from "react";
import "./Events.css";

export class Events extends Component {
  render() {
    const events = this.props.eventData.map(event => {
      console.log(event);
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
    return <div className="test">{events}</div>;
  }
}

export default Events;
