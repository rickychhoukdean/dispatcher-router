import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { generateMovementsOnMap } from "../helpers/mapHelpers";

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    uiState: state.uiState,
  };
};

function ConnectedMovementMapView({ movements, uiState }) {
  let ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    generateMovementsOnMap(canvas, movements, uiState);
  }, [movements, uiState]);

  return (
    <div>
      <h3>Movement Map</h3>
      <canvas className="map" ref={ref} />
    </div>
  );
}

const MovementMapView = connect(mapStateToProps)(ConnectedMovementMapView);

export default MovementMapView;
