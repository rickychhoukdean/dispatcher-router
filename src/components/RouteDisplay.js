import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createRoute } from "../actions";
import { generateBestRoute } from "../helpers";

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

  let router = driverRoute.map((route, idx) => {
    return (
      <div key={idx} className="route__item">
        {idx + 1}. ({route[0]},{route[1]})
      </div>
    );
  });

  return (
    <div className="sidebar">
      <div className="route">{router}</div>
    </div>
  );
}

const RouteDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedRouteDisplay);

export default RouteDisplay;
