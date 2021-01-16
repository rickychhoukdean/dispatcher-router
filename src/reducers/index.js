import { combineReducers } from "redux";
import movements from "./movements";

export default combineReducers({
  movements,
});

export const initialState = {
  movements: [],
  route: [],
};