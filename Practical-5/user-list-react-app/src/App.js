import React, { useState } from 'react';

import userDetailsList from '../src/userDetailsList.json'
import UserList from './components/UserList/UserList'
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';

function App() {
  const [isHovering, setIsHovering] = useState(false)
  const [data, setData] = useState()
  console.log(data)
  return (
    <div className='App'>
      <div className='container'>
        <div className='user-list'>
          <UserList 
            isHovering={isHovering} 
            setIsHovering={setIsHovering} 
            userDetailsList={userDetailsList} 
            data={data} 
            setData={setData}
          />
        </div>
        <div className='user-profile'>
          {
            isHovering ? <UserProfile data={data}/> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default App;
