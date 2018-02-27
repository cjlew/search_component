import SearchAPI from '../api/search';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';


export const clearSearchResults = () => ({
  type: CLEAR_SEARCH,
});

export const receiveSearch= (results) => ({
  type: RECEIVE_SEARCH,
  results
});

export const clearSearch = () => (dispatch) => (
  dispatch(clearSearchResults())
);

export const search = (query) => (dispatch) => (
  SearchAPI.getUsers(query)
    .then(results => dispatch(receiveSearch(results)) )
);
