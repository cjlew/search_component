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
      <ul id='users-results-list'>
        {Users}
      </ul>
    );
  }

}
