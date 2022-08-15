import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav id='Menu'>
      <Link to='blog-platzi/'>
        Usuarios
      </Link>
      <Link to='blog-platzi/Task'>
        Tareas
      </Link>
    </nav>
  );
}

export default Menu;