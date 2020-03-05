import React, { Component } from "react";
import axios from "axios";
import "./FormAdd.css";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class FormAdd extends Component {
  state = {
    nameOfEvent: "",
    description: "",
    eventTime: Date.now,
    location: "",
    basketball: true,
    football: true,
    tennis: true,
    message: ""
  };

  notifySuccess = () => {
    toast.success("Event created", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true
    });
  };

  handleRadio = click => {
    if (click.target.value === "football") {
      this.setState({
        basketball: false,
        football: true,
        tennis: false
      });
    } else if (click.target.value === "basketball") {
      this.setState({
        basketball: true,
        football: false,
        tennis: false
      });
    } else if (click.target.value === "tennis") {
      this.setState({
        basketball: false,
        football: false,
        tennis: true
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("location at submit", this.state.location);

    axios
      .post("/sports/event/add", {
        location: this.state.location,
        description: this.state.description,
        eventTime: this.state.eventTime,
        nameOfEvent: this.state.nameOfEvent
      })
      .then(response => {
        // redirect

        this.props.history.push("/sports");

        this.props.popupBoolean();
        this.notifySuccess();
        this.props.updateEventList();
      })
      .catch(err => {
        this.setState({
          message: err
        });
      });
  };

  render() {
    let selectedLocations = [];
    selectedLocations = this.props.locationData.filter(location => {
      return (
        (this.state.basketball && location.sportType === "basketball") ||
        (this.state.tennis && location.sportType === "tennis") ||
        (this.state.football && location.sportType === "football")
      );
    });

    return (
      <div className="PopUp">
        <div className="PopUpInside">
          <div className="headingDiv">
            <h1 className="heading">Create Event</h1>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="nameOfEvent"></label>
              <input
                className="inputFields"
                type="text"
                placeholder="Name Of Event"
                name="nameOfEvent"
                id="nameOfEvent"
                value={this.state.nameOfEvent}
                onChange={this.handleChange}
              />
              <br></br>
              <input
                className="inputFields"
                type="text"
                placeholder="Description"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <br></br>
              <input
                type="datetime-local"
                className="inputFields"
                placeholder="Event Time"
                name="eventTime"
                id="eventTime"
                value={this.state.eventTime}
                onChange={this.handleChange}
              />

              <br></br>
              <label htmlFor="location">Choose a location: </label>
              <select
                name="location"
                onChange={this.handleChange}
                id="location"
                value={this.state.location}
              >
                {selectedLocations.map(location => {
                  return (
                    <option value={location.name}>
                      {location.name[0].toUpperCase()}
                      {location.name.substring(1)}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <div>
                <label htmlFor="football">Football</label>
                <input
                  onClick={this.handleRadio}
                  type="radio"
                  id="football"
                  name="event"
                  value="football"
                />
                <label htmlFor="basketball">Basketball</label>
                <input
                  onClick={this.handleRadio}
                  type="radio"
                  id="basketball"
                  name="event"
                  value="basketball"
                />
                <label htmlFor="tennis">Tennis</label>
                <input
                  onClick={this.handleRadio}
                  type="radio"
                  id="tennis"
                  name="event"
                  value="tennis"
                />
              </div>
              <br />
              <button className="formBtn" type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FormAdd);
