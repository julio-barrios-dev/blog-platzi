import React from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/tasksActions';

const Guardar = (props) => {

  const changeUserId = (event) => {
    props.changeUserId(event.target.value);
  };
  const changeTitle = (event) => {
    props.changeTitle(event.target.value);
  };

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
      <button>
        Guardar
      </button>
    </div>
  );
};

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, taskActions)(Guardar);