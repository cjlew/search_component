import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Search from './search.jsx';
import { clearSearch, search } from '../../sagas/search';

const mapStateToProps = (state) => {
  const users = [];

  if (state.search) {
      Object.values(state.search).forEach(user =>
        users.push(user));
      }

  return ({
   users
  });

};

const mapDispatchToProps = (dispatch) => ({
    clearSearch: () => dispatch(clearSearch()),
    search: (query, token) => dispatch(search(query, token)),
  });

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
