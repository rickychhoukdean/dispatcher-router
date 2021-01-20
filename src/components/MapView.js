import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    driverRoute: state.driverRoute,
  };
};

function ConnectedMapView({ movements, driverRoute }) {
  const [mapType, setMapType] = useState(true);

  let ref = useRef();
  // TODO: Make lines look good.
  useEffect(() => {
    if (mapType) {
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
    } else {
      let canvas = ref.current;
      canvas.width = 1000;
      canvas.height = 750;
      canvas.style.width = "800px";
      canvas.style.height = "800px";
      let context = canvas.getContext("2d");

      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      for (let i = 0; i < driverRoute.length; i++) {
        context.font = "30px Arial";
        if (i === 0) {
          context.beginPath();
          context.moveTo(driverRoute[i][0], driverRoute[i][1]);
          context.lineTo(driverRoute[i + 1][0], driverRoute[i + 1][1]);
          context.lineWidth = 1;
          context.stroke();
          context.strokeStyle = getRandomColor();
        } else {
          context.beginPath();
          context.moveTo(driverRoute[i - 1][0], driverRoute[i - 1][1]);
          context.lineTo(driverRoute[i][0], driverRoute[i][1]);
          context.lineWidth = 1;
          context.stroke();
          context.strokeStyle = getRandomColor();
        }
      }
    }
  }, [movements, mapType, driverRoute]);

  return (
    <>
      <button
        onClick={() => {
          setMapType(!mapType);
        }}
      >
        Type
      </button>
      <canvas className="map" ref={ref} />
    </>
  );
}

const MapView = connect(mapStateToProps)(ConnectedMapView);

export default MapView;
