import React from 'react';
import { Link } from 'react-router';

const UserListItem = ({user}) => {

  return(
    <li className='search-index-item'>
        <Link to={`${user.url}`}>
          <p>user.login</p>
        </Link>
    </li>

  );
};

export default UserListItem;
