import React from 'react';
import UserListItem from './usersListItems.jsx';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Users = this.props.users.map(user =>
                                  <UserListItem user={user}
                                                key={user.id}/>);

    return(
      <div>
        <h3>Github Users</h3>
        <ul id='users-results-list'>
          {Users}
        </ul>
      </div>
    );
  }

}
