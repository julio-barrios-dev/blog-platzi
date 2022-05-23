import axios from "axios";
import { 
  UPDATED,
  LOADING, 
  ERROR, 
  COM_LOADING, 
  COM_ERROR, 
  COM_UPDATED
 } from "../types/postTypes";
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
      comments:[],
      open: false
    }))

    const updated_posts = [
      ...publicaciones,
      news
    ];
    dispatch({
      type: UPDATED,
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
    dispatch({
      type: ERROR,
      paylod: 'Publicaciones no disponibles'
    })
  }
}

export const openClose = (post_key, com_key) => (dispatch, getState) => {
  const { publicaciones } = getState().publicacionesReducer;
  const selected = publicaciones[post_key][com_key];

  const updated = {
    ...selected,
    open: !selected.open
  };

  const updated_posts = [...publicaciones];
  updated_posts[post_key] = [
    ...publicaciones[post_key]
  ];
  updated_posts[post_key][com_key] = updated;

  dispatch({
    type: UPDATED,
    payload: updated_posts
  });
  
};

export const getComments = (post_key, com_key) => async (dispatch, getState) => {
  const { publicaciones } = getState().publicacionesReducer;
  const selected = publicaciones[post_key][com_key];

  try {
    dispatch({
      type: COM_LOADING
    });
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);
    const updated = {
      ...selected,
      comments: response.data
    };
    const updated_posts = [...publicaciones];
    updated_posts[post_key] = [
      ...publicaciones[post_key]
    ];
    updated_posts[post_key][com_key] = updated;
  
    dispatch({
      type: COM_UPDATED,
      payload: updated_posts
    });
  } catch (error) {
    dispatch({
      type: COM_ERROR,
      payload: 'Comentarios no disponibles.'
    })
  }

}

