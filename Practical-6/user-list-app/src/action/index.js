import axios from 'axios';
import user from './userDetail'

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
export const requestUsers = (data) => async (dispatch) => {
  dispatch({
    type: user.LOAD,
  });
  try {
    const json = await axios.get('userDetails.json');
    dispatch ({
      type: user.LOAD_SUCCESS,
      userDetails: json.data,
      isError: false
    });
  }
  catch (e) {
    dispatch ({
      type: user.LOAD_SUCCESS,
      userDetails: [],
      isError: true,
    })
  }
}
