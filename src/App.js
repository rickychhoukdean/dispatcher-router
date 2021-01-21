import "./App.scss";
import { connect } from "react-redux";
import MapView from "./components/MapView";
import Navbar from "./components/NavBar";
import MovementList from "./components/MovementList";
import EditMovementForm from "./components/EditMovementForm";
import MovementForm from "./components/MovementForm";
import RouteDisplay from "./components/RouteDisplay";
import RouteView from "./components/RouteView";
import { changeSideView, changeMapView } from "./actions/";

const mapStateToProps = (state) => {
  return {
    uiState: state.uiState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSideView: () => dispatch(changeSideView()),
    changeMapView: () => dispatch(changeMapView()),
  };
};

function ConnectedApp({ uiState, changeSideView, changeMapView }) {
  return (
    <>
      <button onClick={changeSideView}>Change side view</button>
      <button onClick={changeMapView}>Change map view</button>

      <Navbar />
      {uiState.sideView ? <MovementList /> : <RouteDisplay />}
      {uiState.mapView ? <MapView /> : <RouteView />}
      <EditMovementForm />
      <MovementForm />
    </>
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
