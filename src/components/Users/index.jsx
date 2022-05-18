import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from '../../components/Users/Tabla';

import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  componentDidMount() {
    this.props.getAll();
  }
  addContent = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />
    }
    return <Tabla />;
  
  };

  render() {
    console.log(this.props.cargando);
    console.log(this.props.error);
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
