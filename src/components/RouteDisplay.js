import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createRoute } from "../actions";
import { baseGenerateDriverRoute, displayRoutes } from "../helpers";

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
    createRoute(baseGenerateDriverRoute(movements));
  }, [movements, createRoute]);

  return (
    <div className="route">Driver Route: {displayRoutes(driverRoute)}</div>
  );
}

const RouteDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedRouteDisplay);

export default RouteDisplay;
