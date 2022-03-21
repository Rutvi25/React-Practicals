import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from './UserInfo';
import OtherInfo from './OtherInfo';
import './User.css';

function User(props) {

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
    <div className={screenSize >= 850 ? 'user-container' : 'user-sm-container'} >
      <UserInfo user={props.user}/>
      {screenSize >= 850 ? <OtherInfo user={props.user}/> :
        <div className='other-info'>
        <OtherInfo user={props.user} />
      </div>}
    </div>
  </>
  )
}

export default User;