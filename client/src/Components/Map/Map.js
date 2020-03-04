import axios from "axios";
import MapGL, { Marker } from "react-map-gl";
import React, { Component } from "react";
import "./Map.css";

import FormBtn from "../FormBtn/FormBtn";
import FormAdd from "../FormAdd/FormAdd";
import SportsNavbar from "../SportsNavbar/SportsNavbar";
import Events from "../Events/Events";
import Pin from "./Pin";

const TOKEN =
  "pk.eyJ1Ijoic3RpZmFtYWpzdG9yIiwiYSI6ImNrNmt4dm5wYTA1ZnQzbmxpNWd3N2F1Y3kifQ.G19vSaN3Jp--2ruqN8L_bQ";

export default class Map extends Component {
  state = {
    viewport: {
      lng: 52.52,
      lat: 13.4,
      zoom: 2.5,
      bearing: 0,
      pitch: 0
    },
    locations: [],
    events: [],
    filteredSports: [],
    addLocPopup: false,
    seeEvents: false,
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
    });
  };

  onClickPopUp = () => {
    this.setState({
      addLocPopup: !this.state.addLocPopup
    });
  };
  onClickEvents = () => {
    this.setState({
      seeEvents: !this.state.seeEvents
    });
  };

  handleOnClickSportsFilter = event => {
    event.preventDefault();
    console.log(this.state.basketball, "basketball toggled");
    console.log(this.state.tennis, "tennis toggled");
    console.log(this.state.football, "football toggled");
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    });
  };

  render() {
    let filteredSports = [];
    if (this.state.locations.length > 0) {
      filteredSports = this.state.locations.filter(ele => {
        return (
          (ele.sportType === "tennis" && this.state.tennis) ||
          (ele.sportType === "basketball" && this.state.basketball) ||
          (ele.sportType === "football" && this.state.football)
        );
      });
    }

    return (
      <>
        <MapGL
          {...this.state.viewport}
          width="100%"
          height="100vh"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={viewport => this.setState({ viewport: viewport })}
          mapboxApiAccessToken={TOKEN}
        >
          {filteredSports.map(el => {
            {
              /* console.log(el.coordinates, "filtered marker"); */
            }
            return (
              <Marker
                longitude={el.coordinates[0]}
                latitude={el.coordinates[1]}
              >
                <Pin />
                {/* <img></img> */}
              </Marker>
            );
          })}
        </MapGL>
        <div onClick={() => this.onClickPopUp()}>
          <FormBtn />
        </div>
        <div>
          <SportsNavbar
            popupBoolean={this.onClickEvents}
            handleOnClickSportsFilter={this.handleOnClickSportsFilter}
          />
        </div>
        <div>
          {this.state.seeEvents ? (
            <Events
              setUser={this.props.setUser}
              eventData={this.state.events}
            />
          ) : (
            ""
          )}
          {this.state.addLocPopup ? (
            <FormAdd
              popupBoolean={this.onClickPopUp}
              locationData={this.state.locations}
            />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
