import React from "react";
import { connect } from "react-redux";
import RouteListItem from "./RouteListItem";

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    driverRoute: state.driverRoute,
  };
};

function ConnectedRouteList({ driverRoute }) {
  let router = driverRoute.map((route, idx) => {
    return <RouteListItem key={idx} pos={idx} route={route}></RouteListItem>;
  });

  return (
    <div>
      <div className="route">{router}</div>
    </div>
  );
}

const RouteList = connect(mapStateToProps)(ConnectedRouteList);

export default RouteList;
