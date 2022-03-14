import React, { useState } from 'react';

import UserList from './components/UserList/UserList'
import './App.css';
import UserProfile from './components/UserProfile/UserProfile';
function App() {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <div className='App'>
      <div className='container'>
        <div className='user-list'>
          <UserList isHovering={isHovering} setIsHovering={setIsHovering} />
        </div>
        <div className='user-profile'>
          {
            isHovering ? <UserProfile /> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default App;
