
export const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    payload: {
      id
    }
  }
}
export const hoverUser = (user) => {
  return {
    type: 'HOVER_USER',
    payload: {
      user,
    }
  }
}