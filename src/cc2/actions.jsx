export const SET_USERS = 'SET_USERS';
export const ADD_USER = 'ADD_USER';

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
