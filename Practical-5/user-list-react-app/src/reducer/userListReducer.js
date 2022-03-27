const initialState = {
  userDetails: [],
  userProfile: [],
};
const userListReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      console.log('users')
      return {
        ...state,
        userDetails: [...state.userDetails, ...action.payload]
      }
    case 'REMOVE_USER':
      return {
        ...state,
        userDetails: [...state.userDetails.filter((user) => user.id!== action.payload.id)],
        userProfile: []
      }
    case 'MOUSE_ENTER':
      return {
        ...state,
        userProfile: [
          {
            user: action.payload.user
          }
        ]
      }
    case 'MOUSE_LEAVE':
      return {
        ...state,
        userProfile: []
      }
    case 'CHANGE_USER_STATUS':
      return{
        ...state,
        userDetails : state.userDetails.map((userDetail) => {
          if(userDetail.id === action.payload.id) {
            return {
              ...userDetail,
              isUserActive: !userDetail.isUserActive
            }
          }
          else {
            return userDetail;            
          }
        })
      }     
    default: return state;
  }
}

export default userListReducers;