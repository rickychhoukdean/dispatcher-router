import "./App.scss";
import { connect } from "react-redux";
import MovementMapView from "./components/MovementMapView";
import Navbar from "./components/NavBar";
import MovementList from "./components/MovementList";
import EditMovementForm from "./components/EditMovementForm";
import MovementForm from "./components/MovementForm";
import RouteList from "./components/RouteList";
import RouteMapView from "./components/RouteMapView";

const mapStateToProps = (state) => {
  return {
    uiState: state.uiState,
  };
};

function ConnectedApp({ uiState }) {
  return (
    <div className="app">
      <Navbar />
      <div className="row">
        <div className="sidebar col-sm-3">
          {uiState.sideView ? <MovementList /> : <RouteList />}
        </div>
        <div className="map__container col-sm-9">
          {uiState.mapView ? <MovementMapView /> : <RouteMapView />}
        </div>
        <EditMovementForm />
        <MovementForm />
      </div>
    </div>
  );
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
