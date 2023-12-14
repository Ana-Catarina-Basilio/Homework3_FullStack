import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
  loginError: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true, loginError: false };
    case 'LOGIN_ERROR':
      return { ...state, isLoggedIn: false, loginError: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, loginError: false };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
