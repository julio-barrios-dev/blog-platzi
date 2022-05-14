import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          Nombre: 'Julio',
          Correo: 'julio@gmail.com',
          Enlace: 'juliobc.com'
        } 
      ]
    }
  }

  addRows = () => [
    <tr>
      <td>Julio</td>
      <td>julio@gmail.com</td>
      <td>juliobc.com</td>
    </tr>,
    <tr>
      <td>Cesar</td>
      <td>Cesar@gmail.com</td>
      <td>Cesarbc.com</td>
    </tr>

  ];

  render() {
    return (
      <div className='Margin'>
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

export default App;
