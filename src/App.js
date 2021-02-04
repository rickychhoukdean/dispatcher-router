import "./App.scss";
import { connect } from "react-redux";
import GoogleMovementMap from "./components/GoogleMovementMap";
import Navbar from "./components/NavBar";
import MovementList from "./components/MovementList";
import EditMovementForm from "./components/EditMovementForm";
import MovementForm from "./components/MovementForm";
import RouteList from "./components/RouteList";
import ReactMap from "./components/GoogleMovementMap";
import RouteMapView from "./components/RouteMapView";
import { ToastContainer, Slide } from "react-toastify";
import { Tabs, Tab } from "react-bootstrap";
import { changeMapView } from "./actions/";
import "react-toastify/dist/ReactToastify.css";

const mapDispatchToProps = (dispatch) => {
  return {
    changeMapView: () => dispatch(changeMapView()),
  };
};

function ConnectedApp({ changeMapView }) {
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
        <div className="sidebar col-lg-3">
          <Tabs defaultActiveKey="movement">
            <Tab eventKey="movement" title="Movements">
              <MovementList />
            </Tab>
            <Tab eventKey="routes" title="Route">
              <RouteList />
            </Tab>
          </Tabs>
        </div>

        <div className="map__container col-lg-9">
          <Tabs defaultActiveKey="movement-map" onSelect={changeMapView}>
            <Tab eventKey="movement-map" title="Movements">
              <GoogleMovementMap />
              {/* <MovementMapView /> */}
            </Tab>
            <Tab eventKey="route-map" title="Routes">
              <RouteMapView />
            </Tab>
          </Tabs>
        </div>
        <EditMovementForm />
        <MovementForm />
      </div>
    </div>
  );
}
const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;
