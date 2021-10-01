import { combineReducers } from "redux";
import movies from "./movies";
import filters from "./filters";
import popup from "./popup";

export default combineReducers({
  movies,
  filters,
  popup,
});
