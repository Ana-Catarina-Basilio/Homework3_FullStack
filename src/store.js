import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
  loginError: false,
  username: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true, loginError: false };
    case 'LOGIN_ERROR':
      return { ...state, isLoggedIn: false, loginError: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, loginError: false, username: null };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
