import React from 'react';

import UserList from './components/UserList/UserList'
import './App.css';
import UserProfile from './components/UserProfile/UserProfile';
function App() {

  return (
    <div className='App'>
      <div className='container'>
        <div className='user-list'>
          <UserList />
        </div>
        <div className='user-profile'>
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default App;
