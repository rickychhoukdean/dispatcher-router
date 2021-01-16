import "./App.scss";
import MapView from "./components/MapView";
import MovementForm from "./components/Movement/MovementForm";
import MovementList from "./components/Movement/MovementList";
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
