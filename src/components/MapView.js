import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    movements: state.movements,
  };
};

function ConnectedMapView({ movements }) {
  let ref = useRef();
  // TODO: Make lines look good.
  useEffect(() => {
    let canvas = ref.current;
    canvas.width = 1000;
    canvas.height = 750;
    canvas.style.width = "800px";
    canvas.style.height = "800px";
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

  return (
    <>
      <canvas className="map" ref={ref} />
    </>
  );
}

const MapView = connect(mapStateToProps)(ConnectedMapView);

export default MapView;
