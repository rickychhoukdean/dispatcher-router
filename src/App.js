import "./App.scss";
import { connect } from "react-redux";
import MovementMapView from "./components/MovementMapView";
import Navbar from "./components/NavBar";
import MovementList from "./components/MovementList";
import EditMovementForm from "./components/EditMovementForm";
import MovementForm from "./components/MovementForm";
import RouteList from "./components/RouteList";
import RouteMapView from "./components/RouteMapView";
import { ToastContainer,Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const mapStateToProps = (state) => {
  return {
    uiState: state.uiState,
  };
};

function ConnectedApp({ uiState }) {
  return (
    <div className="app">
      <Navbar />
      <div>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          transition={Slide}
        />
      </div>
      <div className="row">
        <div className="sidebar col-md-3">
          {uiState.sideView ? <MovementList /> : <RouteList />}
        </div>
        <div className="map__container col-md-9">
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
