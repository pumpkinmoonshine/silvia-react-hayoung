import { createStore, applyMiddleware } from "redux";
import index from "./modules/index";
import penderMiddleware from "redux-pender";

const store = createStore(index, applyMiddleware(penderMiddleware()));

export default store;
