import React from 'react';

import UserList from './components/UserList/UserList'
import './App.css';
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='user-list'>
          <UserList />
        </div>
        <div className='user-profile'>

        </div>
      </div>
    </div>
  );
}

export default App;
