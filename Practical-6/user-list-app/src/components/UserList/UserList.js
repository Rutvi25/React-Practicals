import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestUsers } from '../../action';

// import data from '../../userDetails.json'
import EmptyList from '../EmptyList/EmptyList'
import Title from '../Title/Title'
import User from '../User/User'

function UserList() {

  // const { isLoading, userDetails } = useSelector((state) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(() => requestUsers(data));
  // }, []);


  // return (
  //   <>
  //     { isLoading && <div>Data Loading ...</div> }
  //     { userDetails.map((user) => {
  //       return (
  //         <div>{user.id}</div>
  //       )
  //     })}
      
  //   </>
  // )
  const {userDetails} = useSelector((state) => state)

  const dispatch = useDispatch();
  dispatch(requestUsers)

  useEffect(() => dispatch(requestUsers), [dispatch])

  let displayList;
  if({userDetails}.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetails?.map((user) => {
      const {id} = user
      return(
        <User key={ id }
          user={ user }
        />        
      )
    })
  }

  return (
    <>
      { {displayList}.length ? <Title /> : '' }
      <div className='user-list-container'>
        { displayList }
      </div>
    </>
  )
}

export default UserList