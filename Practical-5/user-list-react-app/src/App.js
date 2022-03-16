import React, { useState } from 'react';

import UserList from './components/UserList/UserList'
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';
import { hoverUser } from './action/index';
import { useSelector } from 'react-redux';
// import userDetails from './reducer/index';

function App() {
  // const [isHovering, setIsHovering] = useState(false)
  // for user profile card
  const [data, setData] = useState()
  // const [userStatus, setUserStatus]
  const userProfileData = useSelector((state) => state.userListReducer.userProfile)
  
  return (
    <div className='App container-fluid'>
      <div className='user-list-main-container'>
        <div className='user-list'>
          <UserList 
            hoverUser = {hoverUser}
            data={ data } 
            setData={ setData }
          />
        </div>
        <div className='user-profile'>
          {
            data ? <UserProfile data={ data }/> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default App;