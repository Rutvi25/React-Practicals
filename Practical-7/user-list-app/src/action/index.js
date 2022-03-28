import axios from 'axios';

export const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    payload: {
      id
    }
  }
}
export const mouseEnter = (user) => {
  return {
    type: 'MOUSE_ENTER',
    payload: {
      user,
    }
  }
}
export const mouseLeave = (user) => {
  return {
    type: 'MOUSE_LEAVE',
    payload: {
      user,
    }
  }
}
export const changeUserStatus = (id) => {
  return {
    type: 'CHANGE_STATUS',
    payload: {
      id,
    }
  }
}
export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  }
}
export const fetchUserSuccess = (users) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  }
}
export const fetchUserFailure = (error) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error
  }
}
export const handlePagination = (pageNumber) => {
  return {
    type: 'CHANGE_PAGE',
    payload: {
      pagination: pageNumber,
    },
  };
};

export const requestUsers = (pagination) => {
  const url = `https://reqres.in/api/users?page=${pagination}`;
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios.get(url)
      .then((response) => {
        const users = response.data
        dispatch(fetchUserSuccess(users))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchUserFailure(errorMsg))
      }) 
  }
}
