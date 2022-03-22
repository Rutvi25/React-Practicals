import axios from 'axios';
// import user from './userDetail'

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
export const fetchUserSuccess = (data) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: data
  }
}
export const fetchUserFailure = (error) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error
  }
}

export const requestUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios.get('https://reqres.in/api/users?page=1')
      .then((response) => {
        const data = response.data
        // console.log(data)
        dispatch(fetchUserSuccess(data))
      })
      .catch((error) => {
        const errorMsg = error.message
      }) 
  }
}
// export const requestUsers = (data) => async (dispatch) => {
//   dispatch({
//     type: user.LOAD,
//   });
//   try {
//     const json = await axios.get('userDetails.json');
//     dispatch ({
//       type: user.LOAD_SUCCESS,
//       userDetails: json.data,
//       isError: false
//     });
//   }
//   catch (e) {
//     dispatch ({
//       type: user.LOAD_SUCCESS,
//       userDetails: [],
//       isError: true,
//     })
//   }
// }
