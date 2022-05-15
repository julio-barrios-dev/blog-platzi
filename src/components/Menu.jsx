import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav id='Menu'>
      <Link to='/'>
        Usuarios
      </Link>
      <Link to='/Task'>
        Tareas
      </Link>
    </nav>
  );
}

export default Menu;