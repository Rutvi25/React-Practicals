const initialState = {
  userDetails: {},
  signedUp: false
}
const userManagementReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {
        ...state,
        userDetails: {...action.payload},
        signedUp: true
      }
    case 'LOGOUT':
      return {
        ...state,
        userDetails: {},
        signedUp: false
      }
    default:
      return state
  }
}

export default userManagementReducer;