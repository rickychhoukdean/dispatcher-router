import "./App.scss";
import MapView from "./components/MapView";
import MovementForm from "./components/MovementForm";
import MovementList from "./components/MovementList";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MovementForm></MovementForm>
      <MovementList></MovementList>
      <MapView></MapView>
    </>
  );
}

export default App;
