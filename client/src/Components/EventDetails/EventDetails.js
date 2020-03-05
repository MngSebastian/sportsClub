import React, { Component } from "react";
import "./EventDetials.css";

export default class EventDetails extends Component {
  state = {};

  
  
  
  
  
  render() {
    return (
      <div className="event-details">
        <div>
          <p>Event Name: {this.props.eventDetails.nameOfEvent}</p>
        </div>
      </div>
    );
  }
}
