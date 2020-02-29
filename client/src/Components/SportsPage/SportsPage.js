import React, { Component } from "react";

import FormCreate from "../FormCreate/FormCreate";
import Map from "../Map/Map";

export default class SportsPage extends Component {
  render() {
    console.log("SPORTS PAGE RENDERED");
    return (
      <>
        <Map />
        {/* <FormCreate /> */}
      </>
    );
  }
}
