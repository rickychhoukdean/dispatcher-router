import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    driverRoute: state.driverRoute,
  };
};

function ConnectedRouteList({ driverRoute }) {
  let router = driverRoute.map((route, idx) => {
    return (
      <div key={idx} className="route__item">
        {idx + 1}. ({route[0]},{route[1]})
      </div>
    );
  });

  return (
    <div>
      <h3>Route List</h3>
      <div className="route">{router}</div>
    </div>
  );
}

const RouteList = connect(mapStateToProps)(ConnectedRouteList);

export default RouteList;
