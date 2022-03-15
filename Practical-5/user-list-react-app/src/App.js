import React, { useState } from 'react';

import UserList from './components/UserList/UserList'
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';

function App() {
  const [isHovering, setIsHovering] = useState(false)
  // for user profile card
  const [data, setData] = useState()
  
  return (
    <div className='App container-fluid'>
      <div className='user-list-main-container'>
        <div className='user-list'>
          <UserList 
            isHovering={isHovering} 
            setIsHovering={ setIsHovering } 
            data={data} 
            setData={ setData }
          />
        </div>
        <div className='user-profile'>
          {
            isHovering ? <UserProfile data={ data }/> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default App;
