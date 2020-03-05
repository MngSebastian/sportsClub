import React, { Component } from "react";
import "./EventDetials.css";
import moment from "moment";

export default class EventDetails extends Component {
  state = {};

  render() {
    let created = this.props.eventDetails.eventTime;
    const eventTime = moment(created).fromNow();

    const users = this.props.eventDetails.usersJoining.map(user => {
      return <div className="user">{user.username}</div>;
    });
    console.log(this.props.eventDetails);
    return (
      <div>
        <div className="eventDetails">
          <div className="header">
            <p>{this.props.eventDetails.nameOfEvent}</p>
          </div>
          <div>
            <div className="usersJoining">
              <div className="heading1">
                <p>People Joining</p>
              </div>
              <div className="scrollDiv">
                <div className="">
                  <p>{users}</p>
                </div>
              </div>
            </div>

            <div className="EventInfo">
              <div className="info">
                <p>Organizer: {this.props.eventDetails.creator.username}</p>
                <p>Location: {this.props.eventDetails.location}</p>
              </div>
              <div className="info description">
                <p>
                  {" "}
                  Description:<br></br> {this.props.eventDetails.description}
                </p>
              </div>

              <div className="info time">{eventTime}</div>
            </div>
            <div className="asd">
              <div className="BtnDiv">
                <div className="spaceForHover">
                  <button onClick={this.props.joinEvent} className="btn">
                    Join
                  </button>
                </div>
                <div className="spaceForHover">
                  <button
                    className="btn"
                    onClick={() => {
                      this.props.clearEventDetails();
                    }}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
