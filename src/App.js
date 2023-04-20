import React, { useState } from 'react';

import UserList from './components/Users/UserList/UserList';
import UserInput from './components/Users/UserInput/UserInput';
import './App.css';

const App = () => {
  const [Users, setUsers] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addUserHandler = enteredText => {
    setUsers(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setUsers(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (Users.length > 0) {
    content = (
      <UserList items={Users} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {Users.length > 0 && (
          <UserList
            items={Users}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
