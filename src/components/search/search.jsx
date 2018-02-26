import React from 'react';
import UsersList from './usersList.jsx';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      token: '',
    };
  }

  update(field) {
    return e => {
      this.props.search(e.currentTarget.value, this.state.token);
      this.setState({
      [field]: e.currentTarget.value
    })
    ;};
  }


  render() {
    const SearchResults = <UsersList users={this.props.users}/>;

    return(
      <div id='search-container'>
        <input type='text'
            id='access-token'
            placeholder={'Paste your Github Access Token Here!'}
            value={this.state.token}
            onChange={this.update('token')}/>

        <div id='searchbar-container'>
          <input type='text'
            id='search-bar'
            placeholder={'Search'}
            value={this.state.search}
            onChange={this.update('search')}/>
        </div>

        <div id='search-results-container'>
          {SearchResults}
        </div>
    </div>
    );
  }
}
