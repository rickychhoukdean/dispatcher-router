import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
  generateRoutesOnMap,
  generateLabelsOnRoute,
} from "../helpers/mapHelpers";

const mapStateToProps = (state) => {
  return {
    driverRoute: state.driverRoute,
    uiState: state.uiState,
  };
};

function ConnectedRouteMapView({ driverRoute, uiState }) {
  let ref = useRef();
  useEffect(() => {
    let canvas = ref.current;
    generateRoutesOnMap(driverRoute, canvas);
    generateLabelsOnRoute(driverRoute, canvas);
  }, [driverRoute, uiState]);

  return (
    <div className="map__scroll">
      <canvas className="map" ref={ref} />
    </div>
  );
}

const RouteMapView = connect(mapStateToProps)(ConnectedRouteMapView);

export default RouteMapView;
