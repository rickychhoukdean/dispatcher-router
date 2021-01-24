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
      <h4 className="section-header">Movement Map</h4>
      <div className="map__scroll">
      <canvas className="map" ref={ref} />
      </div>
    </div>
  );
}

const MovementMapView = connect(mapStateToProps)(ConnectedMovementMapView);

export default MovementMapView;
