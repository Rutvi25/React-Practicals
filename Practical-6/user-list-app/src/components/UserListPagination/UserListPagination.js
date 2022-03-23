import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch } from 'react-redux';

import { handlePagination } from '../../action';
import './UserListPagination.css';

function UserListPagination() {
  const dispatch = useDispatch()
  return (
    <div className="user-list-pagination">
      <Pagination >
        <Pagination.Item 
          className='pagination-item' 
          onClick={() => dispatch(handlePagination(1))}
        >
          {1}
        </Pagination.Item>
        <Pagination.Item 
          className='pagination-item' 
          onClick={() => dispatch(handlePagination(2))}
        >
          {2}
        </Pagination.Item>
      </Pagination>
    </div> 
  )
}

export default UserListPagination;