import { combineReducers } from "redux";
import movements from "./movements";
import driverRoute from "./driverRoute";

export default combineReducers({
  movements,
  driverRoute,
});

export const initialState = {
  movements: [],
  driverRoute: [],
};
