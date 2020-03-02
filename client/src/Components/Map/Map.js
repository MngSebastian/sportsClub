import "./Map.css";
import React, { Component } from "react";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RpZmFtYWpzdG9yIiwiYSI6ImNrNmt4dm5wYTA1ZnQzbmxpNWd3N2F1Y3kifQ.G19vSaN3Jp--2ruqN8L_bQ";

export default class Map extends Component {
  state = {
    lng: 5,
    lat: 34,
    zoom: 2
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

let map = new mapboxgl.Map({
  container: "YOUR_CONTAINER_ELEMENT_ID",
  style: "mapbox://styles/mapbox/streets-v11"
});
