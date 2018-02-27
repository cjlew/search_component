import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';


const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export { store, history };
