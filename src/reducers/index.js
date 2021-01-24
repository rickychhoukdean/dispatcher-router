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
    { start: ["300", "400"], end: ["500", "500"], description: "first" },
    { start: ["50", "50"], end: ["300", "300"], description: "2nd" },
    { start: ["200", "100"], end: ["300", "300"], description: "4th" },
    { start: ["500", "600"], end: ["700", "500"], description: "4th" },
    { start: ["300", "800"], end: ["500", "700"], description: "4th" },
  ],

  driverRoute: [],
  uiState: {
    openFormDialog: false,
    openEditDialog: false,
    movementToEdit: { start: [0, 0], end: [0, 0], description: "" },
    sideView: true,
    mapView: true,
    activeMovement: null,
  },
};
