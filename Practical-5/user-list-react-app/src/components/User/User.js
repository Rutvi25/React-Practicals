import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from './UserInfo';
import OtherInfo from './OtherInfo';
import './User.css';

function User({user}) {
  const dispatch = useDispatch();
  useEffect(() => {
    const onResize = () => {
      dispatch({ type: "SCREEN_RESIZE", screenWidth: window.innerWidth });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [dispatch]);
  const screenSize = useSelector((state) => state.screenReducer.screenWidth)

  return (
  <>
    <div className={screenSize < 850 ? 'user-sm-container' : 'user-container' } >
      <UserInfo user={user}/>
      {
        screenSize < 850 ?
        <div className='other-info'>
          <OtherInfo user={user} />
        </div> :
        <OtherInfo user={user}/>    
      }
    </div>
  </>
  )
}

export default User;