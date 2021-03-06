import { RECEIVE_SEARCH, CLEAR_SEARCH } from './../sagas/search.js';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SEARCH:
      return Object.assign({}, action.results);
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
