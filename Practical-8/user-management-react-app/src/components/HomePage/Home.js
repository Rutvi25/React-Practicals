import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../actions';
import './Home.css';

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handleLogout() {
    dispatch(logout()); 
    navigate('/signup');
  }
  const userDetails = useSelector((state) => state.userManagementReducer.userDetails)
  const {name, email, phoneNumber, fileURL} = userDetails.values
  return (
    <div className='home-page'>
      <div className='logout-btn'>
        <button onClick={handleLogout}>Logout</button>
      </div> 
      <div className='user-profile'>
        <img src={fileURL} alt='preview-img' />
      </div>
      <div className='registration-detail'>
        Hello {name}, 
        <br/> you are registered with  
        <br/> email id - {email} and phone number - {phoneNumber} 
      </div>
    </div>
  )
}

export default Home