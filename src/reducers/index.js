import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import search from './searchReducer.js';

// main reducers
const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  // your reducer here
  search
});

export default rootReducer;
