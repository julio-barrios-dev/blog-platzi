import { GET_USERS, LOADING, ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
        return {
          ...state, 
          usuarios: action.payload,
          cargando: false
        };
    case LOADING:
      return {...state, cargando: true};  
    case ERROR:
      return {...state, error: action.payload, cargando: false };
    default:
      return state;
  }
};