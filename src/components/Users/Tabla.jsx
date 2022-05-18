import React from 'react';
import { connect } from 'react-redux';

function Tabla(props) {
  const addRows = () => (
    props.usuarios.map((user) => (
      <tr key={user.id} >
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
      </tr>
    ))
  );
  return (
    <div>
      <table className='Table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          { addRows() }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps)(Tabla);