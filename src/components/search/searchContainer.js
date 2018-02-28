import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Search from './search.jsx';
import { clearSearch, search } from '../../sagas/search';

const mapStateToProps = (state) => {
  let users;
  state.search.items ? users = state.search.items : users = [];
  return ({
   users
  });

};

const mapDispatchToProps = (dispatch) => ({
    clearSearch: () => dispatch(clearSearch),
    search: (query, token) => dispatch(search(query, token)),
  });

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
