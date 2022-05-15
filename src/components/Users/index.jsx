import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      usuarios: response.data
    })
  }

  addRows = () => (
    this.state.usuarios.map((user) => (
      <tr key={user.id} >
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
      </tr>
    ))
  );

  render() {
    console.log(this.state.usuarios);
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

export default Users;
