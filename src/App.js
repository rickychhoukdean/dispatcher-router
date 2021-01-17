import "./App.scss";
import MapView from "./components/MapView";
import SideBar from "./components/SideBar";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <MapView />
    </>
  );
}

export default App;
