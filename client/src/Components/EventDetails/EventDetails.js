import React, { Component } from "react";
import "./EventDetials.css";
import moment from "moment";

export default class EventDetails extends Component {
  state = {};

  render() {
    let created = this.props.eventDetails.eventTime;
    const eventTime = moment(created).fromNow();

    const users = this.props.eventDetails.usersJoining.map(user => {
      return <div>{user.username}</div>;
    });

    return (
      <div>
        <div className="eventDetails">
          <div className="header">
            <p>{this.props.eventDetails.nameOfEvent}</p>
          </div>
          <div>
            <div className="usersJoining">
              <div className="user">
                <p>{users}</p>
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
                {eventTime}
              </p>
            </div>
          </div>
          <p>asd</p>
          <button onClick={this.props.joinEvent}>Join</button>
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
