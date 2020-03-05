import React, { Component } from "react";
import "./Events.css";
import moment from "moment";

export class Events extends Component {
  render() {
    const events = this.props.eventData.map(event => {
      let created = event.eventTime;
      event.eventTime = moment(created).fromNow();

      return (
        <div
          onClick={() => {
            this.props.passEventDetails(event);
          }}
          key={event._id}
          className="test555"
          // to={event._id}
        >
          <div>{event.nameOfEvent}</div>
          <div>{event.description}</div>
          <div>{event.eventTime}</div>
          {/* <br></br> */}
          {/* <br></br> */}
          {/* <br></br> */}
          {/* <button className="eventBtn">See More</button> */}
        </div>
      );
    });
    return <div className="events">{events}</div>;
  }
}

export default Events;
