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
          <div className="Name">
            <div>{event.nameOfEvent}</div>
          </div>
          <div className="Description">
            <div>{event.description}</div>
          </div>

          <div className="Time">
            <div>{event.eventTime}</div>
          </div>

          {/* <button className="eventBtn">See More</button> */}
        </div>
      );
    });
    return <div className="events">{events}</div>;
  }
}

export default Events;
