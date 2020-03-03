import axios from "axios";
import "./Map.css";
import React, { Component } from "react";
import FormBtn from "../FormBtn/FormBtn";
import FormAdd from "../FormAdd/FormAdd";
import SportsNavbar from "../SportsNavbar/SportsNavbar";
import Events from "../Events/Events";
// import LogoNodejs from "react-ionicons/lib/lib/LogoNodejs";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RpZmFtYWpzdG9yIiwiYSI6ImNrNmt4dm5wYTA1ZnQzbmxpNWd3N2F1Y3kifQ.G19vSaN3Jp--2ruqN8L_bQ";

export default class Map extends Component {
  state = {
    lng: 13.4,
    lat: 52.52,
    zoom: 10,
    data: [],
    addLocPopup: false,
    basketball: false,
    football: false,
    tennis: false,
    coordinates: [],
    filteredSports: []
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    // const nav = new mapboxgl.NavigationControl();
    // map.addControl(nav, "low-right");
    // const geolocate = new mapboxgl.GeolocateControl({
    //   showUserLocation: true,
    //   trackUserLocation: true
    // });
    this.getData();
  }

  getData = () => {
    axios.get("/sports/all").then(res => {
      // for (let location in res) {
      //   if (location.sportType === "basketball" && this.state.basketball === true){
      //     let
      //     this.setState({
      //       coordinates: res.data.coordinates
      //     })
      // }
      // }
      this.setState({
        data: res.data
      });
      console.log(this.state.data);
    });
  };

  onClickPopUp = () => {
    this.setState({
      addLocPopup: !this.state.addLocPopup
    });
  };

  // basketballData = () => {
  //   for (location in this.state.data) {
  //     if (location.sportType === "basketball") {
  //       location.forEach((location) => {
  //         console.log(location.coordinates);
  //         // add marker to map
  //         let marker = new mapboxgl.Marker(el)
  //             .setLngLat([location.long, location.lat])
  //             .setPopup(popup)
  //             .addTo(this.map);

  //         this.markers.push(marker);
  //     });
  //     }
  //   }
  // }

  handleOnClickSportsFilter = event => {
    event.preventDefault();

    console.log("WORKS");

    this.setState({
      [event.target.name]: !this.state[event.target.name]
    });
  };

  render() {
    let filteredSports = [];
    if (this.state.data.length > 0) {
      filteredSports = this.state.data.filter(ele => {
        return (
          (ele.sportType === "Tennis" && this.state.tennis) ||
          (ele.sportType === "basketball" && this.state.basketball)
        );
      });
    }

    console.log(filteredSports);

    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer">
          <div onClick={() => this.onClickPopUp()}>
            <FormBtn />
          </div>
          <div>
            <SportsNavbar
              handleOnClickSportsFilter={this.handleOnClickSportsFilter}
            />
            <Events />
          </div>
        </div>
        {this.state.addLocPopup ? (
          <FormAdd
            popupBoolean={this.onClickPopUp}
            setUser={this.props.setUser}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
