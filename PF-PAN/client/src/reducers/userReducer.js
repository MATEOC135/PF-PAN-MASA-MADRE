// userReducer.js

// Definir los tipos de acciones
const SET_USER = 'SET_USER';
const CLEAR_USER = 'CLEAR_USER';

// Estado inicial
const initialState = {
  user: null,
};

// Reducer de usuario
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// Acción para establecer el usuario
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// Acción para borrar el usuario
export const clearUser = () => ({
  type: CLEAR_USER,
});

export default userReducer;
