import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestUsers } from '../../action';
import EmptyList from '../EmptyList/EmptyList';
import Title from '../Title/Title';
import User from '../User/User';
import UserListPagination from '../UserListPagination/UserListPagination';

function UserList({ userDetails }) {
  const { error, loading, pagination } = useSelector((state) => state.userListReducer)
  const dispatch = useDispatch()
  // for requesting user details
  useEffect(() => {
    dispatch(requestUsers(pagination)) 
  }, [dispatch, pagination])
  // for displaying users list
  let displayList;
  if(userDetails.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetails.map((user) => {
      const { id } = user
      return(
        <User 
          key={id}
          user={user}
        />        
      )
    })
  }
  return loading 
  ? ( <h2>Loading</h2> ) 
  : error 
  ? ( <h2>{error}</h2> ) 
  : <>
      { userDetails.length !== 0 && <Title /> }
      <div className='user-list-container'>
        { displayList }
      </div> 
      <UserListPagination />
    </>
}

export default UserList