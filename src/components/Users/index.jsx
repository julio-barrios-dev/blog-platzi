import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from '../../components/Users/Tabla';

import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  componentDidMount() {
    if(!this.props.usuarios.length) {
      this.props.getAll();
    };
  }
  addContent = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal message={this.props.error} />
    }
    return <Tabla />;
  
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Usuarios</h1>
        {this.addContent()}
      </div>
    )}
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
