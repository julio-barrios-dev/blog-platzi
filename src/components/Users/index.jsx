import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  componentDidMount() {
    this.props.getAll();
  }

  addRows = () => (
    this.props.usuarios.map((user) => (
      <tr key={user.id} >
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
      </tr>
    ))
  );

  render() {
    console.log(this.props.cargando);
    console.log(this.props.error);
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
            { this.addRows() }
          </tbody>
        </table>
      </div>
    )}
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
