import React, { useState } from 'react'
import { Lock, Trash2 } from 'react-feather'

import './User.css'

function User(props) {
  const {id, email, first_name, last_name, avatar } = props
  let userStatus, userAccess, icon;
  const [isHovering, setIsHovering] = useState(false)
  
  if(id === 1) {
    userStatus = <div className='owner-status'>Active</div>
    userAccess = <div>Owner</div>
    icon = <Lock size={20}/>
  }
  else {
    userStatus = <select id="status" name="status">
                  <option value="inactive">Inactive</option>
                  <option value="active">Active</option>
                </select>
    userAccess = <select id="access" name="access">
                  <option value="manager">Manager</option>
                  <option value="read">Read</option>
                </select>
    icon = <Trash2 size={20}/>
  }

  function handleMouseHovering() {
    setIsHovering(!isHovering)
    console.log(isHovering, id)
  }

  return (
    <div className='user-container' onMouseOver={handleMouseHovering}>
      <div className='user-info'>
        <div className='user-avatar'>
          <img src={avatar} alt='user-avatar'/>
        </div>
        <div className='user-details'>
          <div className='user-name'>{first_name} {last_name}</div>
          <div className='user-email'>{email}</div>
        </div>
      </div>
      <div className='user-status'>
        {userStatus}
      </div>
      <div className='user-access'>
        {userAccess}
      </div>
      <div className='icon'>
        {icon}
      </div>
    </div>
  )
}

export default User