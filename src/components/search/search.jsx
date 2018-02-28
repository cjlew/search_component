import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      token: '',
      index: -1,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.newSearch = this.newSearch.bind(this);

  }

  handleKeyPress(e) {
    //Switch statement to handle arrowup, enter and arrowdown
    //All other keys are handled through default
    switch(e.key){
      case 'Enter':
        e.preventDefault();
        this.state.selected ? window.location.assign(`${this.state.selected.html_url}`) : null ;
        break;

      case 'ArrowDown':
        e.preventDefault();
        if (this.state.index === this.props.users.length -1) {
          break;
        } else {
          this.setState({
            selected: this.props.users[this.state.index+1],
            index: this.state.index+1
          });
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (this.state.index === 0) {
          break;
        } else {
          this.setState({
            selected: this.props.users[this.state.index-1],
            index: this.state.index-1
          });
        }
        break;
      }
  }

  newSearch(e) {
    if (e.currentTarget.value === '') {
      this.props.clearSearch();
    } else {
      this.props.search(e.currentTarget.value, this.state.token);
    }
  }

  update(field) {
    return e => {
      if (e.currentTarget.value === '') {
        this.props.clearSearch();
        this.setState({
          selected: this.props.users[this.state.index]
        });
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
          <li key={user.id} className='search-index-item'>
              <a href={`${user.html_url}`}>
                <div id={this.state.selected && this.state.selected.id === user.id ?
                                                'selected' :'search-results'}>
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
            onKeyDown={this.handleKeyPress}
            onChange={this.update('search')}/>

          <ul id='users-results-list'>
            {SearchResults}
          </ul>

        </div>

    </div>
    );
  }
}
