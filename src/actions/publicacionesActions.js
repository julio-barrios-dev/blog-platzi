import axios from "axios";
import { GET_BY_USER, LOADING, ERROR } from '../types/postTypes';
import * as usersTypes from '../types/usersTypes';

const { GET_ALL: GET_ALL_USERS } = usersTypes;

const API = 'https://jsonplaceholder.typicode.com/posts';


export const getByUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  });
  const { usuarios } = getState().usersReducer;
  const { publicaciones } = getState().publicacionesReducer;
  const userId = usuarios[key].id;
  
  try {
    const response = await axios.get(`${API}?userId=${userId}`);

    const news = response.data.map((post) => ({
      ...post,
      comment:[],
      open: false
    }))

    const updated_posts = [
      ...publicaciones,
      news
    ];
    dispatch({
      type: GET_BY_USER,
      payload: updated_posts
    });
    const post_key = updated_posts.length - 1;
    const updated_users = [ ...usuarios ];
    updated_users[key] = {
      ...usuarios[key],
      post_key
    }
    dispatch({
      type: GET_ALL_USERS,
      payload: updated_users
    });
  
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      paylod: 'Publicaciones no disponibles'
    })
  }
}

export const openClose = (post_key, com_key) => (dispatch) => {
  console.log(post_key, com_key);
};

