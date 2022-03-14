import React from 'react'
import EmptyList from '../EmptyList/EmptyList'
import Title from '../Title/Title'
import User from '../User/User'

function UserList(props) {
  const {isHovering, setIsHovering, userDetailsList } = props
  let displayList;
  if(userDetailsList.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetailsList.map((user) => {
      const { id, email, first_name, last_name, avatar } = user
      return(
        <User 
          isHovering={isHovering} setIsHovering={setIsHovering} 
          key={id} id={id} email={email} first_name={first_name} last_name={last_name} avatar={avatar}
        />
      )
    })
  }
  return (
    <>
      {displayList.length ? <Title /> : ''}
      <div className='user-list-container'>
        {displayList}
      </div>
    </>
    
  )
}

export default UserList