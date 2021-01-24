import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { generateRoutesOnMap } from "../helpers/mapHelpers";

const mapStateToProps = (state) => {
  return {
    driverRoute: state.driverRoute,
  };
};

function ConnectedRouteMapView({ driverRoute }) {
  let ref = useRef();
  useEffect(() => {
    let canvas = ref.current;

    generateRoutesOnMap(driverRoute, canvas);
  }, [driverRoute]);

  return (
    <div>
      <h4>Route Map</h4>
      <canvas className="map" ref={ref} />
    </div>
  );
}

const RouteMapView = connect(mapStateToProps)(ConnectedRouteMapView);

export default RouteMapView;
