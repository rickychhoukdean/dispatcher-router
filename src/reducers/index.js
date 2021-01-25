import { combineReducers } from "redux";
import movements from "./movements";
import driverRoute from "./driverRoute";
import uiState from "./uiState";

export default combineReducers({
  movements,
  driverRoute,
  uiState,
});

export const initialState = {
  movements: [
    {
      start: { coordinate: ["300", "400"], cityName: "Toronto" },
      end: { coordinate: ["800", "800"], cityName: "Scarborough" },
      description: "Playstation 5",
    },
    {
      start: { coordinate: ["100", "400"], cityName: "Vancouver" },
      end: { coordinate: ["500", "500"], cityName: "Richmond Hill" },
      description: "Best buy",
    },
    {
      start: { coordinate: ["600", "400"], cityName: "Burlington" },
      end: { coordinate: ["200", "750"], cityName: "Downtown" },
      description: "RR",
    },
    {
      start: { coordinate: ["100", "100"], cityName: "Ajax" },
      end: { coordinate: ["900", "100"], cityName: "Downtown" },
      description: "Test",
    },
  ],

  driverRoute: [],
  uiState: {
    openFormDialog: false,
    openEditDialog: false,
    movementToEdit: { start: {coordinate:[0, 0], cityName:""}, end: {coordinate:[0, 0],cityName:""}, description: "" },
    sideView: true,
    mapView: true,
    activeMovement: null,
  },
};
