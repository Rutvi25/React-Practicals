import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';

import { requestUsers, handlePagination } from '../../action';
import EmptyList from '../EmptyList/EmptyList';
import Title from '../Title/Title';
import User from '../User/User';
import './UserList.css'

function UserList({ userDetails, requestUsers }) {
  const dispatch = useDispatch()
  useEffect(() => {
    requestUsers()
  }, [])

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

  return userDetails.loading ? 
    ( <h2>Loading</h2> ) : userDetails.error ? 
    ( <h2>{userDetails.error}</h2> ) : 
    <>
      { userDetails.length !==0 ? <Title /> : '' }
      <div className='user-list-container'>
        { displayList }
      </div> 
      <div className="user-list-pagination">
        <Pagination >
          <Pagination.Item onClick={() => dispatch(handlePagination(1))}>{1}</Pagination.Item>
          <Pagination.Item onClick={() => dispatch(handlePagination(2))}>{2}</Pagination.Item>
        </Pagination>
      </div>   
    </>
}

const mapStateToProps = state => {
  return {
    userDetails: state.userListReducer.userDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestUsers: () => dispatch(requestUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)