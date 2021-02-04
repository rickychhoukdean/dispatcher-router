import React, { useRef, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

import { connect } from "react-redux";
import {
  generateMovementsOnMap,
  generateLabelsOnMovement,
} from "../helpers/mapHelpers";

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    uiState: state.uiState,
  };
};

function ConnectedMovementGoogleMapView({ movements, uiState }) {

console.log(process.env.API_KEY)
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
}

const GoogleMovementMap = connect(mapStateToProps)(
  ConnectedMovementGoogleMapView
);

export default GoogleMovementMap;
