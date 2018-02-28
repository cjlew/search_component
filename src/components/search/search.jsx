import React from 'react';
import { browserHistory } from 'react-router';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      token: '',
      index: -1,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    switch(e.key){
      case 'Enter':
        this.state.selected ? browserHistory.push(`${htis.state.selected.html_url}`) : null ;
        break;
      case 'ArrowDown':
        if (this.state.index === -1) {
          this.setState({
            selected: this.props.users[0]
          });
          this.state.index += 1;
        } else if (this.state.index === this.state.users.length -1) {
          break;
        } else {
          this.state.index += 1;
          this.setState({
            selected: this.props.users[this.state.index]
          });
        }
        break;
      case 'ArrowUp':
        if (this.state.index === 0) {
          break;
        } else {
          this.state.index -= 1;
          this.setState({
            selected: this.props.users[this.state.index]
          });
        }
        break;
      }


  }

  update(field) {
    return e => {
      if (e.currentTarget.value === '') {
        this.props.clearSearch();
      } else {
        this.props.search(e.currentTarget.value, this.state.token);
      }
      this.setState({
      [field]: e.currentTarget.value
    })
    ;};
  }


  render() {
    // Create Search Results component
    let SearchResults = null;
    if (this.props.users.length > 0 && this.state.search !== "") {
        SearchResults = this.props.users.map(user =>
          <li key={user.id} className={this.state.selected === user ?
                                          'selected-search-index-item' :
                                          'search-index-item'}>
              <a href={`${user.html_url}`}>
                <div id='search-results'>
                  <img id='search-result-avatar' src={`${user.avatar_url}`}></img>
                  <p id='search-result-login'>{`${user.login}`}</p>
                </div>
              </a>
          </li>);
      }

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
          onKeyPress={this.handleKeyPress}
          onChange={this.update('search')}/>

        <ul id='users-results-list'>
          {SearchResults}
        </ul>

        </div>

    </div>
    );
  }
}
