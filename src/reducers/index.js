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
      end: { coordinate: ["500", "500"], cityName: "Scarborough" },
      description: "first",
    },
    {
      start: { coordinate: ["100", "400"], cityName: "Chinatown" },
      end: { coordinate: ["500", "500"], cityName: "X" },
      description: "first",
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
