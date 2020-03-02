import React, { Component } from "react";
import axios from "axios";
import "./FormAdd.css";
import { withRouter } from "react-router-dom";

class FormAdd extends Component {
  state = {
    location: "",
    description: "",
    eventTime: Date.now
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/sports/event/add", {
        location: this.state.location,
        description: this.state.description,
        eventTime: this.state.eventTime
      })
      .then(response => {
        // redirect
        console.log(response);
        this.props.history.push("/sports");

        this.props.popupBoolean();
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <div className="PopUp">
        <div className="PopUpInside">
          <div className="headingDiv">
            <h1 className="heading">Create Event</h1>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="location"></label>
              <input
                className="inputFields"
                type="text"
                autoComplete="off"
                placeholder="Event Location"
                id="location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
              <br></br>
              <label htmlFor="description"></label>
              <input
                className="inputFields"
                type="text"
                placeholder="Event Description"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <br />
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
              <button className="formBtn" type="submit">
                Create
              </button>
            </form>
          </div>
          {/* {this.state.message && <p>{this.state.message}</p>} */}
        </div>
      </div>
    );
  }
}

export default withRouter(FormAdd);
