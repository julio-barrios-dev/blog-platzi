import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import publicacionesReducer from './publicacionesReducer';
import tasksReducer from "./tasksReducer";

export default combineReducers({
  usersReducer,
  publicacionesReducer,
  tasksReducer
});