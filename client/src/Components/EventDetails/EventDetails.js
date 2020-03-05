import React, { Component } from "react";
import "./EventDetials.css";

export default class EventDetails extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="eventDetails">
          <div className="header">
            <p>{this.props.eventDetails.nameOfEvent}</p>
          </div>
          <div>
            <div className="usersJoining">
              <div className="user">
                <p>user42</p>
              </div>
            </div>
            <div className="EventInfo">
              <p>
                {" "}
                Description:<br></br> {this.props.eventDetails.description}
              </p>
              {/* asd */}
              <p>
                <br></br>
                {this.props.eventDetails.eventTime}
              </p>
            </div>
            <button>Join</button>
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
