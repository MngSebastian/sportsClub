import axios from "axios";
import MapGL from "react-map-gl";
import React, { Component } from "react";
import "./Map.css";

import FormBtn from "../FormBtn/FormBtn";
import FormAdd from "../FormAdd/FormAdd";
import SportsNavbar from "../SportsNavbar/SportsNavbar";
import Events from "../Events/Events";
import { Marker } from "react-map-gl";

// const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const TOKEN =
  "pk.eyJ1Ijoic3RpZmFtYWpzdG9yIiwiYSI6ImNrNmt4dm5wYTA1ZnQzbmxpNWd3N2F1Y3kifQ.G19vSaN3Jp--2ruqN8L_bQ";

export default class Map extends Component {
  state = {
    viewport: {
      lng: 13.4,
      lat: 52.52,
      zoom: 10
    },
    locations: [],
    events: [],
    filteredSports: [],
    addLocPopup: false,
    basketball: true,
    football: true,
    tennis: true
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("/sports/all").then(res => {
      this.setState({
        locations: res.data.locations,
        events: res.data.events
      });
      // console.log(this.state.data.events);
    });
  };

  onClickPopUp = () => {
    this.setState({
      addLocPopup: !this.state.addLocPopup
    });
  };

  handleOnClickSportsFilter = event => {
    event.preventDefault();

    console.log("WORKS");

    this.setState({
      [event.target.name]: !this.state[event.target.name]
    });
  };

  render() {
    let filteredSports = [];
    if (this.state.locations.length > 0) {
      filteredSports = this.state.locations.filter(ele => {
        return (
          (ele.sportType === "Tennis" && this.state.tennis) ||
          (ele.sportType === "basketball" && this.state.basketball)
        );
      });
    }
    console.log(filteredSports);

    return (
      <>
        <MapGL
          {...this.state.viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={viewport => this.setState({ viewport: viewport })}
          mapboxApiAccessToken={
            "pk.eyJ1Ijoic3RpZmFtYWpzdG9yIiwiYSI6ImNrNmt4dm5wYTA1ZnQzbmxpNWd3N2F1Y3kifQ.G19vSaN3Jp--2ruqN8L_bQ"
          }
        >
          {filteredSports.map(el => {
            return (
              <Marker
                longitude={el.coordinates[0]}
                latitude={el.coordinates[1]}
              />
            );
          })}
        </MapGL>
        <div onClick={() => this.onClickPopUp()}>
          <FormBtn />
        </div>
        <div>
          <SportsNavbar
            handleOnClickSportsFilter={this.handleOnClickSportsFilter}
          />
          <Events eventData={this.state.events} />
        </div>
        <div>{this.state.addLocPopup ? <FormAdd /> : ""}</div>
      </>
    );
  }
}
