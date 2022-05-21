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
