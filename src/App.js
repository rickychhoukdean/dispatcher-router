import "./App.scss";
import { connect } from "react-redux";
import MapView from "./components/MapView";
import Navbar from "./components/NavBar";
import MovementList from "./components/MovementList";
import EditMovementForm from "./components/EditMovementForm";
import MovementForm from "./components/MovementForm";
import RouteDisplay from "./components/RouteDisplay";
import RouteView from "./components/RouteView";
import { changeSideView } from "./actions/";

const mapStateToProps = (state) => {
  return {
    uiState: state.uiState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSideView: () => dispatch(changeSideView()),
  };
};

function ConnectedApp({ uiState, changeSideView }) {
  return (
    <>
      <button onClick={changeSideView}>fsafasfsafsafiobsafoisab</button>
      <Navbar />
      {uiState.sideView ? <MovementList /> : <RouteDisplay />}
      {uiState.sideView ? <MapView /> : <RouteView />}
      <EditMovementForm />
      <MovementForm />
    </>
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
