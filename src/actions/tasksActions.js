import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/tasksTypes';


export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    const tasks = {};
    response.data.forEach((task) => (
      tasks[task.userId] = {
        ...tasks[task.userId],
        [task.id]: {
          ...task
        }
      }
    ));

    dispatch({
      type: GET_ALL,
      payload: tasks
    })
  }
  catch(error) {
    console.log('Error', error.message);
    dispatch({
      type: ERROR,
      payload: 'Información de tareas no disponible.'
    })
  }
};

export const changeUserId = (user_id) => (dispatch) => {
  dispatch({
    type: 'change_user_id',
    payload: user_id 
  })
}
export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: 'change_title',
    payload: title 
  })
}

export const addTask = (newTask) => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTask);
    console.log(response.data);
    dispatch({
      type: 'added'
    })
  }
  catch(error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Intente mas tarde.'
    })
  }
}

