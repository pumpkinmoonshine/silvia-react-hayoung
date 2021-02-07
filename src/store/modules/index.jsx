import { combineReducers } from "redux";
import movie from "./movie";
import todo from "./todo";
import loader from "./loader";
import { penderReducer as pender } from "redux-pender";

export default combineReducers({
  movie,
  todo,
  loader,
  pender,
});
