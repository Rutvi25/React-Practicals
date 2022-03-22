// import user from '../action/userDetail'

const initialData = {
  userDetails: [],
  isLoading: false,
  error: '',
  userProfile: [],
  pagination: 1,
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
        userDetails: action.payload.data,
        error: ''
      }
    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
        userDetails: [],
        isLoading: false
      }
    case 'CHANGE_PAGE':
      console.log(action.payload.pagination)
      return {
        ...state,
        pagination: action.payload.pagination,
      };
    default: return state
  }
}

export default userListReducers;