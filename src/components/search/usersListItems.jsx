import React from 'react';

const UserListItem = ({user}) => {

  return(
    <li className='search-index-item'>
        <a href={`${user.html_url}`}>
          <img src={`${user.avatar_url}`}></img>
          <p>{`${user.login}`}</p>
        </a>
    </li>

  );
};

export default UserListItem;
