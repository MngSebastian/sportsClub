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
          {event.nameOfEvent}
          <br></br>
          {event.description}
          <br></br>
          {event.eventTime}
          <br></br>
          {/* <button className="eventBtn">See More</button> */}
        </div>
      );
    });
    return <div className="events">{events}</div>;
  }
}

export default Events;
