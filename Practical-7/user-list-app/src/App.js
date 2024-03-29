import React from 'react';
import { useSelector } from 'react-redux';

import UserList from './components/UserList/UserList'
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';

function App() {
  const userProfileData = useSelector((state) => state.userListReducer.userProfile)
  const userDetails = useSelector((state) => state.userListReducer.userDetails)
  return (
    <div className='app container-fluid'>
      <div className='user-list-main-container'>
        <div className={userProfileData.length === 0 ? 'user-list' : 'user-list user-list-sm'}>
          <UserList userDetails={userDetails}/>
        </div>
        <div className='user-profile'>
          {
            userProfileData.length !== 0 && <UserProfile userProfileData={userProfileData}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;