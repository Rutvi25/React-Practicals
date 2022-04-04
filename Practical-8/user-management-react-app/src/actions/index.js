export const addUser = (values) => {
  console.log(values)
  return {
    type: 'ADD_USER',
    payload: {
      values
    }
  }
}
export const logout = () => {
  console.log("logout event dispatched")
  return {
    type: 'LOGOUT',
  }
}