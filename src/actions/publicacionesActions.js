import axios from "axios";
import { GET_BY_USER ,GET_ALL, LOADING, ERROR } from '../types/postTypes';

const API = 'https://jsonplaceholder.typicode.com/posts';

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const response = await axios.get(API);
    dispatch({
      type: GET_ALL,
      payload: response.data
    })
  }
  catch(error) {
    console.log('Error: ', error.message);
    dispatch({
      type: ERROR,
      payload: 'Algo salio mal, intente más tarde.'
    })
  }
}

export const getByUser = (key) => async (dispatch, getState) => {
  const { usuarios } = getState().usersReducer;
  const userId = usuarios[key].id;
  const response = await axios.get(`${API}?userId=${userId}`);
  dispatch({
    type: GET_BY_USER,
    payload: response.data
  })
}
