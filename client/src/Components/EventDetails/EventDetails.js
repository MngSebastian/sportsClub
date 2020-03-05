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
              <div className="heading1">
                <p>People Joining</p>
              </div>
              <div className="scrollDiv">
                <div className="user">
                  <p>bannana</p>
                </div>
              </div>
            </div>

            <div className="EventInfo">
              <div className="info"></div>
              <div className="info description">
                <p>
                  {" "}
                  Description:<br></br> {this.props.eventDetails.description}
                </p>
              </div>

              <div className="info time">
                {this.props.eventDetails.eventTime}
              </div>
            </div>
            <div className="asd">
              <div className="BtnDiv">
                <div className="spaceForHover">
                  <button className="btn">Join</button>
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
