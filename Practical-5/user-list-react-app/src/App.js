import React, { useState } from 'react';

import UserList from './components/UserList/UserList'
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';
//import { hoverUser } from './action/index';
import { useSelector } from 'react-redux';
// import userDetails from './reducer/index';

function App() {
  // const [isHovering, setIsHovering] = useState(false)
  // for user profile card
  // const [data, setData] = useState()
  // const [isUserActive, setUserActive] = useState(false)
  const userProfileData = useSelector((state) => state.userListReducer.userProfile)
  const [userStatus, setUserStatus] = useState('Inactive')
  
  return (
    <div className='App container-fluid'>
      <div className='user-list-main-container'>
        <div className={userProfileData.length === 0 ? 'user-list' : 'user-list user-list-sm'}>
          <UserList userStatus={userStatus} setUserStatus={setUserStatus}/>
        </div>
        <div className='user-profile'>
          {
            userProfileData.length !==0 ? <UserProfile userProfileData={userProfileData} userStatus={userStatus}/> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default App;