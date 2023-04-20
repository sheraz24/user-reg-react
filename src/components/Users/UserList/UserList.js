import React from 'react';

import UserItem from '../UserItem/UserItem';
import './UserList.css';

const UserList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <UserItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </UserItem>
      ))}
    </ul>
  );
};

export default UserList;
