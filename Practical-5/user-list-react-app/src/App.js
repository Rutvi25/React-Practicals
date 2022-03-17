import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import UserList from './components/UserList/UserList'
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';

function App() {
  const userProfileData = useSelector((state) => state.userListReducer.userProfile)
  const [isUserActive, setUserActive] = useState('Inactive')
  
  return (
    <div className='App container-fluid'>
      <div className='user-list-main-container'>
        <div className={userProfileData.length === 0 ? 'user-list' : 'user-list user-list-sm'}>
          <UserList setUserActive={setUserActive} />
        </div>
        <div className='user-profile'>
          {
            userProfileData.length !==0 ? <UserProfile userProfileData={userProfileData} isUserActive={isUserActive}/> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default App;