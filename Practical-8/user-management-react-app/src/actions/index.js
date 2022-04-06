export const addUser = (values) => {
  return {
    type: 'ADD_USER',
    payload: {
      values
    }
  };
};
export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};