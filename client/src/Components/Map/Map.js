import axios from "axios";
import "./Map.css";
import React, { Component } from "react";

import FormCreate from "./../FormCreate/FormCreate";

// import LogoNodejs from "react-ionicons/lib/lib/LogoNodejs";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RpZmFtYWpzdG9yIiwiYSI6ImNrNmt4dm5wYTA1ZnQzbmxpNWd3N2F1Y3kifQ.G19vSaN3Jp--2ruqN8L_bQ";

export default class Map extends Component {
  state = {
    lng: 5,
    lat: 34,
    zoom: 2,
    data: []
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    this.getData();
  }

  getData = () => {
    axios.get("/sports/all").then(res => {
      console.log(res);
      // let arr = res.data[0].coordinates[0];

      // console.log(arr);
      this.setState({
        data: res
      });
    });
  };

  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer">
          <FormCreate />
        </div>
      </div>
    );
  }
}

// let map = new mapboxgl.Map({
//   container: "YOUR_CONTAINER_ELEMENT_ID",
//   style: "mapbox://styles/mapbox/streets-v11"
// });
