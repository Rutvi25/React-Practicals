import React from 'react'
import { Lock, Trash2 } from 'react-feather'
import { useDispatch } from 'react-redux'
import { hoverUser, removeUser } from '../../action'

import './User.css'

function User(props) {
  const { user, setData } = props
  const { id, email, first_name, last_name, avatar} = user
  let userStatus, userAccess, icon;
  const dispatch = useDispatch()

  if(id === 1) {
    userStatus = <div className='owner-status'>Active</div>
    userAccess = <div>Owner</div>
    icon = <Lock size={20}  onClick={() => alert('Owner can\'t be removed.')}/>
  }
  else {
    let status='false';
    function changeStatus() {
      status=!status
    }
    userStatus = <select id="status" name="status">
                  <option value="inactive" onClick={changeStatus}>Inactive</option>
                  <option value="active" onClick={changeStatus}>Active</option>
                </select>
    userAccess = <select id="access" name="access">
                  <option value="manager">Manager</option>
                  <option value="read">Read</option>
                </select>
    icon = <Trash2 size={20} onClick={() => dispatch(removeUser(id))}/>
  }

  // for hovering effect & displaying card data accordingly
  function handleMouseEnter() {
    dispatch(hoverUser(user))
    console.log(hoverUser(user))
    console.log(user)
    setData(user)
  }
  function handleMouseLeave() {
    dispatch(hoverUser(id))
    setData()
  }

  return (
  <>
    <div className='user-container' >
      <div className='user-info' onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
        <div className='user-avatar'>
          <img src={ avatar } alt='user-avatar'/>
        </div>
        <div className='user-details'>
          <div className='user-name'>{ first_name } { last_name }</div>
          <div className='user-email'>{ email }</div>
        </div>
      </div>  
      <div className='user-status'>
        { userStatus }
      </div>
      <div className='user-access'>
        { userAccess }
      </div>
      <div className='icon'>
        { icon }
      </div>
    </div>
    {/* For small devices */}
    <div className='user-sm-container'>
      <div className='user-info' onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
        <div className='user-avatar'>
          <img src={ avatar } alt='user-avatar'/>
        </div>
        <div className='user-details'>
          <div className='user-name'>{ first_name } { last_name }</div>
          <div className='user-email'>{ email }</div>
        </div>
      </div>  
      <div className='other-info'>
        <div className='user-status'>
          { userStatus }
        </div>
        <div className='user-access'>
          { userAccess }
        </div>
        <div className='icon'>
          { icon }
        </div>
      </div>
    </div>
  </>
  )
}

export default User