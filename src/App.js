import React, { useState } from 'react';

import UserList from './components/Users/UserList/UserList';
import UserInput from './components/Users/UserInput/UserInput';
import './App.css';

const App = () => {
  
  const [Users, setUsers] = useState([
    { text: 'User 1', id: 'g1' },
    { text: 'User 2', id: 'g2' }
  ]);

  const addUserHandler = enteredText => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  const deleteItemHandler = userId => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };

  const newErrorHandler = () => {
    //left off here - need to add some kind of change to the App.css .page-cover
    //class from display none to display block when there is an error in UserInput

  };

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  );

  if (Users.length > 0) {
    content = (
      <UserList items={Users} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <div className='page-cover'></div>
      <section id="user-form">
        <UserInput onAddUser={addUserHandler} onNewError={newErrorHandler}/>
      </section>
      <section id="users">
        {content}
        {/* {Users.length > 0 && (
          <UserList
            items={Users}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
