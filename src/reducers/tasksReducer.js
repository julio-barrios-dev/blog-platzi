import { GET_ALL, LOADING, ERROR, CHANGE_USER_ID, CHANGE_TITLE, ADDED } from "../types/tasksTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: '',
  usuario_id:'',
  titulo: ''
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
    case CHANGE_USER_ID:
      return {...state, usuario_id: action.payload };
    case CHANGE_TITLE:
      return {...state, titulo: action.payload };
    case ADDED:
      return {...state, tareas: {}, cargando: false, error: '' };
    default:
      return state;
  }
};