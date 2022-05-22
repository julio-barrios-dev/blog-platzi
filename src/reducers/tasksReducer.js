import { GET_ALL, LOADING, ERROR, CHANGE_USER_ID, CHANGE_TITLE, SAVE, UPDATE } from "../types/tasksTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: '',
  usuario_id:'',
  titulo: '',
  regresar: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state, 
        tareas: action.payload,
        cargando: false,
        error: '',
        regresar: false
      };
    case LOADING:
      return {...state, cargando: true};  
    case ERROR:
      return {...state, error: action.payload, cargando: false };
    case CHANGE_USER_ID:
      return {...state, usuario_id: action.payload };
    case CHANGE_TITLE:
      return {...state, titulo: action.payload };
    case SAVE:
      return {
        ...state, 
        tareas: {}, 
        cargando: false, 
        error: '', 
        regresar: true,
        usuario_id: '',
        titulo: '' };
    case UPDATE:
      return {...state, tareas: action.payload};
    default:
      return state;
  }
};