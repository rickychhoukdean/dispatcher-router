import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    driverRoute: state.driverRoute,
  };
};

function ConnectedRouteView({ driverRoute }) {
  let ref = useRef();
  useEffect(() => {
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

      context.font = "30px Arial";
      context.fillText(i + 1, driverRoute[i][0], driverRoute[i][1]);
    }
  }, [driverRoute]);

  return (
    <>
      <canvas className="map" ref={ref} />
    </>
  );
}

const RouteView = connect(mapStateToProps)(ConnectedRouteView);

export default RouteView;
