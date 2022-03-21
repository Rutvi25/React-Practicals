import React from 'react';
import { Lock, Trash2 } from 'react-feather';
import { useDispatch } from 'react-redux';

import { changeUserStatus, removeUser } from '../../action';
import './User.css';

function OtherInfo(props) {
  // const { user } = props
  const { id } = props.user
  const dispatch = useDispatch()
  // conditional rendering for owner & user
  return (
  <>
    <div className='user-status'>
      { 
        id === 1 ? 
          <div className='owner-status'>Active</div> : 
          <select id="status" name="status" onChange={() => dispatch(changeUserStatus(id))}>
            <option value="Inactive">Inactive</option>
            <option value="Active">Active</option>
          </select>
      }
    </div>
    <div className='user-access'>
      {
        id === 1 ?
        <div>Owner</div> :
        <select id="access" name="access">
          <option value="manager">Manager</option>
          <option value="read">Read</option>
        </select>
      }
    </div>
    <div className='icon'>
      { 
        id === 1 ?
        <Lock size={20} onClick={() => alert('Owner can\'t be removed.')}/> :
        <Trash2 size={20} onClick={() => dispatch(removeUser(id))}/>     
      }
    </div>
  </>
  )
}

export default OtherInfo;