import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    driverRoute: state.driverRoute,
  };
};

function ConnectedMapView({ movements, driverRoute }) {
  let ref = useRef();
  // TODO: Make lines look good.
  useEffect(() => {
    let canvas = ref.current;
    canvas.width = 1000;
    canvas.height = 750;
    // canvas.style.width = "500px";
    // canvas.style.height = "375px";
    let context = canvas.getContext("2d");

    movements.forEach((movement) => {
      context.beginPath();

      context.font = "30px Arial";
      context.fillText(
        movement.description,
        movement.start[0],
        movement.start[1]
      );

      context.moveTo(movement.start[0], movement.start[1]);
      context.lineTo(movement.end[0], movement.end[1]);
      context.lineWidth = 1;
      context.stroke();
    });
  }, [movements]);

  useEffect(() => {
    driverRoute.forEach((route) => {
      // TODO: Add visual driver route here
    });
  }, [driverRoute]);

  return (
    <>
      <canvas className="map" ref={ref} />
    </>
  );
}

const MapView = connect(mapStateToProps)(ConnectedMapView);

export default MapView;
