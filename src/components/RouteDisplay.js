import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createRoute } from "../actions";
import {
  baseGenerateDriverRoute,
  generateDriverRoute,
  generateBestRoute,
} from "../helpers";

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    driverRoute: state.driverRoute,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route)),
  };
};

function ConnectedRouteDisplay({ driverRoute, movements, createRoute }) {
  useEffect(() => {
    createRoute(generateBestRoute(movements));
  }, [movements, createRoute]);

  let router = driverRoute.map((route) => {
    return (
      <div>
        {route[0]},{route[1]}
      </div>
    );
  });

  return (
    <div className="sidebar">
      <h3>route</h3>
      <div className="route">{router}</div>
    </div>
  );
}

const RouteDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedRouteDisplay);

export default RouteDisplay;
