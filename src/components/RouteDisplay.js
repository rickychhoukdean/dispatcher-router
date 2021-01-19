import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createRoute } from "../actions";
import { baseGenerateDriverRoute } from "../helpers";

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
  // TODO: Show driver route nicely.

  return <>{driverRoute}</>;
}

const RouteDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedRouteDisplay);

export default RouteDisplay;
