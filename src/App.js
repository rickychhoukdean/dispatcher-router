import "./App.scss";
import MapView from "./components/MapView";
import Navbar from "./components/NavBar";
import MovementList from "./components/MovementList";
import EditMovementForm from "./components/EditMovementForm";
import MovementForm from "./components/MovementForm";
import RouteDisplay from "./components/RouteDisplay";

function App() {
  return (
    <>
      <RouteDisplay />
      <Navbar />
      <MovementList />
      <EditMovementForm />
      <MovementForm />
      <MapView />
    </>
  );
}

export default App;
