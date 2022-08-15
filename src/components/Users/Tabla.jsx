import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Tabla(props) {
  const addRows = () => (
    props.usuarios.map((user, key) => (
      <tr key={user.id} >
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
        <td>
          <Link to={`blog-platzi/publicaciones/${key}`}>
            <div className="eye-solid icon" />
          </Link>
        </td>
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