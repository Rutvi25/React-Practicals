import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestUsers } from '../../action';

import EmptyList from '../EmptyList/EmptyList'
import Title from '../Title/Title'
import User from '../User/User'

function UserList({ userDetails, requestUsers }) {

  useEffect(() => {
    requestUsers()
  }, [])

  let displayList;
  if(userDetails.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetails.data.map((user) => {
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