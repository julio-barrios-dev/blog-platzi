import { 
  UPDATED,
  LOADING, 
  ERROR, 
  COM_LOADING, 
  COM_ERROR, 
  COM_UPDATED
 } from "../types/postTypes";

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: '',
  com_cargando: false,
  com_error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATED:
      return {
        ...state,
        publicaciones: action.payload,
        cargando: false,
        error: ''
      }
    case LOADING:
      return {...state, cargando: true};  
    case ERROR:
      return {...state, error: action.payload, cargando: false };
    case COM_LOADING:
      return {...state, com_cargando: true};  
    case COM_UPDATED:
      return {
        ...state,
        publicaciones: action.payload,
        com_cargando: false,
        com_error: ''
      }
    case COM_ERROR:
      return {...state, com_error: action.payload, com_cargando: false };
    default:
      return state;
  }
};