import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    uiState: state.uiState,
  };
};

function ConnectedMapView({ movements, uiState }) {
  let ref = useRef();
  useEffect(() => {
    let canvas = ref.current;
    canvas.width = 1000;
    canvas.height = 1000;
    let context = canvas.getContext("2d");
    movements.forEach((movement, idx) => {
      context.beginPath();
      context.font = "30px Arial";
      context.strokeStyle = "black";
      context.fillText(
        movement.description,
        movement.start[0],
        movement.start[1]
      );
      context.moveTo(movement.start[0], movement.start[1]);
      context.lineTo(movement.end[0], movement.end[1]);
      context.lineWidth = 1;
      context.stroke();

      context.beginPath();

      context.fillStyle = "black";
      context.arc(movement.start[0], movement.start[1], 5, 0, 2 * Math.PI);
      context.arc(movement.end[0], movement.end[1], 5, 0, 2 * Math.PI);
      context.fill();

      if (uiState.activeMovement === idx) {
        context.beginPath();
        context.strokeStyle = "#FF0000";
        context.moveTo(movement.start[0], movement.start[1]);
        context.lineTo(movement.end[0], movement.end[1]);
        context.lineWidth = 3;
        context.stroke();
      }
    });
  }, [movements, uiState.activeMovement]);

  return (
    <div className="map__container">
      <canvas className="map" ref={ref} />
    </div>
  );
}

const MapView = connect(mapStateToProps)(ConnectedMapView);

export default MapView;
