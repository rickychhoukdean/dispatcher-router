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
      <h4 className="section-header">Route Map</h4>
      <div className="map__scroll">
        <canvas className="map" ref={ref} />
      </div>
    </div>
  );
}

const RouteMapView = connect(mapStateToProps)(ConnectedRouteMapView);

export default RouteMapView;
