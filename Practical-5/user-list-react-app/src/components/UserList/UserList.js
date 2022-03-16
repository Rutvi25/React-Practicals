import React from 'react';
import { useSelector } from 'react-redux';

import EmptyList from '../EmptyList/EmptyList'
import Title from '../Title/Title'
import User from '../User/User'

function UserList(props) {
  const userDetails = useSelector((state) => state.userListReducer.userDetails)
  const { setData } = props
  let displayList;
  if(userDetails.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetails?.map((user) => {
      const {id} = user
      return(
        <User key={ id }
        //  setIsHovering={ setIsHovering } 
          setData={ setData }
          user={ user }
        />        
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

export default UserList