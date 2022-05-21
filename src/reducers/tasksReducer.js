import { GET_ALL, LOADING, ERROR } from "../types/tasksTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state, 
        tareas: action.payload,
        cargando: false,
        error: ''
      };
    case LOADING:
      return {...state, cargando: true};  
    case ERROR:
      return {...state, error: action.payload, cargando: false };
    default:
      return state;
  }
};