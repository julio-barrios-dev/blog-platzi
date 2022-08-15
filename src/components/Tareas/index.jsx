import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../components/General/Spinner';
import Fatal from '../../components/General/Fatal';

import * as tasksActions from '../../actions/tasksActions';

const Tareas = (props) => {

  useEffect(() => {
    const { tareas, cargando, getAll } = props
    if (!Object.keys(tareas).length && !cargando) {
      getAll();
    }
  });

  const showContent = () => {
    const { tareas, cargando, error } = props;

    if(cargando) {
      return <Spinner />
    };
    if(error) {
      return <Fatal message={error} />
    };

    return Object.keys(tareas).map((user_id) => (
      <div key={user_id}>
        <h2>
          {user_id}
        </h2>
        <div className='Container_tasks'>
          { addTasks(user_id) }
        </div>

      </div>
    ))
  };

  const addTasks = (user_id) => {
    const { tareas, changeCheck, deleteTask } = props;
    const byUser = {
      ...tareas[user_id]
    }

    return Object.keys(byUser).map((task) => (
      <div className='Task' key={task}>
        <div>
          <input 
            type='checkbox' 
            defaultChecked={byUser[task].completed}
            onChange={() => changeCheck(user_id, task)}
          />
          {
            byUser[task].title
          }
        </div>
        <div>
          <button className='m_left'>
            <Link to={`blog-platzi/task/save/${user_id}/${task}`}>
              Editar
            </Link>
          </button>
          <button className='m_left edit' onClick={() => deleteTask(task)}>
            Eliminar
          </button>
        </div>
      </div>
    ));
  }
  return (
    <div>
      <Link to='/tareas/guardar'>
        <button>
          Agregar
        </button>
      </Link>
      {showContent()}
    </div>
  );
};

const mapStateToProps = ({ tasksReducer }) => tasksReducer; 

export default connect(mapStateToProps, tasksActions)(Tareas);