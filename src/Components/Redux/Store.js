import { combineReducers, createStore } from "redux";
import reducer from "./Reducer";

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(rootReducer);

export default store;
