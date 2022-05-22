import { GET_ALL, LOADING, ERROR } from "../types/tasksTypes";

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
    case 'change_user_id':
      return {...state, usuario_id: action.payload };
    case 'change_title':
      return {...state, titulo: action.payload };
    case 'added':
      return {...state, tareas: {}, carando: false, error: '' };
    default:
      return state;
  }
};