import React from 'react'

import './UserProfile.css'

function UserProfile() {
  return (
    <div className='user-profile-container'>
      <div className='user-profile-avatar'>
        <img src='https://reqres.in/img/faces/1-image.jpg' alt='user-profile-avatar'/>
      </div>
      <div className='user-profile-name'>John Doe</div>
      <div className='user-profile-email'>john@gmail.com</div>
      <div className='user-plan'>Your Plan: Standard</div>
      <div className='user-profile-status'>Active User</div>
      <div className='user-plan-usage'>Plan Uses</div> 
      {/*Progress Bar*/}
      <div className="progress">
        <div className="progress-bar progress-bar-warning usage" role="progressbar"></div>
        <div className="progress-bar unused" role="progressbar"></div>
      </div>
      <div className='clicks'>
        <div className='clicks-reviewed'>
          <div className='click-reviewed-count'>2,450</div>
          <div className='click-reviewed-text'>clicks reviewed</div>
        </div>
        <div className='separator'></div>
        <div className='monthly-clicks'>
          <div className='monthly-click-count'>5000</div>
          <div className='monthly-click-text'>Monthly clicks</div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile