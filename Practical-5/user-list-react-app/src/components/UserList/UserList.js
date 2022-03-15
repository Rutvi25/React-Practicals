import React from 'react'

import EmptyList from '../EmptyList/EmptyList'
import userDetailsList from '../../userDetailsList.json'
import Title from '../Title/Title'
import User from '../User/User'

function UserList(props) {
  const { setIsHovering, setData } = props
  let displayList;
  if(userDetailsList.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetailsList.map((user) => {
      const {id} = user
      return(
        <User key={ id }
          setIsHovering={ setIsHovering } 
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