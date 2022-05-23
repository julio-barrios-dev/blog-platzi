import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/tasksActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import { Navigate, useParams } from 'react-router-dom';

const Guardar = (props) => {

  const { user_id, task } = useParams();

  useEffect(() => {
    const {
      tareas,
      changeUserId,
      changeTitle
    } = props

    if (user_id && task) {
      const tarea = tareas[user_id][task];
      changeUserId(tarea.userId);
      changeTitle(tarea.title)
    } else {
      props.cleanForm();
    }
  }, []);

  const changeUserId = (event) => {
    props.changeUserId(event.target.value);
  };
  const changeTitle = (event) => {
    props.changeTitle(event.target.value);
  };
  const save = () => {
    const { 
      tareas,
      usuario_id, 
      titulo, 
      addTask,
      edit } = props;

    const newTask = {
      userId: usuario_id,
      title: titulo,
      completed: false
    };

    if (user_id && task) {
      const tarea = tareas[user_id][task];
      const tarea_editada = {
        ...newTask,
        completed: tarea.completed,
        id: tarea.id
      }
      edit(tarea_editada);
    } 
    else {
      addTask(newTask);
    }

  }
  const disabled = () => {
    const { usuario_id, titulo, cargando } = props;

    if (cargando) {
      return true;
    }
    if(!usuario_id || !titulo) {
      return true;
    }
    return false;
  }

  const showAction = () => {
    const { error, cargando } = props;
    if (cargando) {
      return <Spinner />;
    }
    if (error) {
      return <Fatal message={error} />;
    }
  }
  return (
    <div>
        {(props.regresar) ? <Navigate to='/task' />: ''}
      <h1>
        Guardar Tarea
      </h1>
      Usuarios id:
      <input 
        type='number' 
        value={ props.usuario_id }
        onChange={changeUserId}
      />
      <br /><br />
      Título:
      <input 
        type='text'
        value={ props.titulo }
        onChange={changeTitle}
      />
      <br /><br />
      <button
        onClick={save}
        disabled={disabled()}
      >
        Guardar
      </button>
      { showAction() }
    </div>
  );
};

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, taskActions)(Guardar);