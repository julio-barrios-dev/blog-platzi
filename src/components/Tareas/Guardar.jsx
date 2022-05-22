import React from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/tasksActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import { Redirect } from 'react-router-dom';

const Guardar = (props) => {

  const changeUserId = (event) => {
    props.changeUserId(event.target.value);
  };
  const changeTitle = (event) => {
    props.changeTitle(event.target.value);
  };
  const save = () => {
    const { usuario_id, titulo, addTask } = props;
    const newTask = {
      userId: usuario_id,
      title: titulo,
      completed: false
    }
    addTask(newTask);
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