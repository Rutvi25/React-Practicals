import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';

import { handlePagination, requestUsers } from '../../action';
import EmptyList from '../EmptyList/EmptyList';
import Title from '../Title/Title';
import User from '../User/User';
import './UserList.css'

function UserList({ userDetails }) {
  const { error, loading, pagination } = useSelector((state) => state.userListReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestUsers(pagination)) 
  }, [dispatch, pagination])

  let displayList;
  if(userDetails.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetails.map((user) => {
      const {id} = user
      return(
        <User key={ id }
          user={ user }
        />        
      )
    })
  }

  return loading ? 
    ( <h2>Loading</h2> ) : 
    error ? 
    ( <h2>{error}</h2> ) : 
    <>
      { userDetails.length !==0 ? <Title /> : '' }
      <div className='user-list-container'>
        { displayList }
      </div> 
      <div className="user-list-pagination">
        <Pagination >
          <Pagination.Item className='pagination-item' onClick={() => dispatch(handlePagination(1))}>{1}</Pagination.Item>
          <Pagination.Item className='pagination-item' onClick={() => dispatch(handlePagination(2))}>{2}</Pagination.Item>
        </Pagination>
      </div> 
    </>
}

export default UserList