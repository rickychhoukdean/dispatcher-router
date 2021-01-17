import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    movements: state.movements,
  };
};

function ConnectedMapView({ movements }) {
  let ref = useRef();

  const getPixelRatio = (context) => {
    var backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;

    return (window.devicePixelRatio || 1) / backingStore;
  };

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    let ratio = getPixelRatio(context);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    movements.forEach((movement) => {
      context.beginPath();
      context.moveTo(movement.start[0], movement.start[1]);
      context.lineTo(movement.end[0], movement.end[1]);
      context.lineWidth = 10;
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
