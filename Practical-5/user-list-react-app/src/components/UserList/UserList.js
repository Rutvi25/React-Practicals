import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EmptyList from '../EmptyList/EmptyList';
import Title from '../Title/Title';
import User from '../User/User';
import { fetchData } from '../../action';

function UserList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])
  const userDetails = useSelector((state) => state.userListReducer.userDetails)
  let displayList;
  if(userDetails.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetails?.map((user) => {
      const {id} = user
      return(
        <User key={ id } user={ user } />        
      )
    })
  }
  return (
    <>
      { displayList.length ? <Title /> : '' }
      <div className='user-list-container'>
        { displayList }
      </div>
    </>
  )
}

export default UserList;