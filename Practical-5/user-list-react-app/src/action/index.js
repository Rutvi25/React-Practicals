export const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    payload: {
      id
    }
  }
}