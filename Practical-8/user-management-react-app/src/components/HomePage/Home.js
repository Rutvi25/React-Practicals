import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../actions';
import './Home.css';
import PhotoPreview from '../PhotoPreview';

function Home() {
  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userManagementReducer.userDetails)
  console.log(userDetails)
  const {name, email, phoneNumber, fileURL} = userDetails.values
  return (
    <div className='home-page'>
      <div className='logout-btn'>
      <Link to={'/signup'}>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </Link>
      </div> 
      <div className='user-profile'>
        <PhotoPreview fileURL={fileURL} />
      </div>
      <div className='registration-detail'>
        Hello {name}, 
        <br/> you are registered with  <br/> email id - {email} and phone number - {phoneNumber} 
      </div>
    </div>
  )
}

export default Home