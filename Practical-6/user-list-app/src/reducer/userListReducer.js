// import user from '../action/userDetail'

const initialData = {
  userDetails: [],
  isLoading: false,
  error: '',
  userProfile: []
}
const userListReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return {
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
    case 'CHANGE_STATUS':
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
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        userDetails: action.payload,
        error: ''
      }
    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
        userDetails: [],
        isLoading: false
      }
    default: return state

    // case user.LOAD:
    //   return {
    //     ...state, 
    //     isLoading: true,
    //     isError: false
    //   };
    // case user.LOAD_SUCCESS:
    //   return {
    //     ...state,
    //     userDetails: action.userDetails,
    //     isLoading: false,
    //   }
  }
}

export default userListReducers;