import React from 'react';

const Guardar = (props) => {
  return (
    <div>
      <h1>
        Guardar Tarea
      </h1>
      Usuarios id:
      <input type='number' />
      <br /><br />
      Título:
      <input type='text'/>
      <br /><br />
      <button>
        Guardar
      </button>
    </div>
  );
};

export default Guardar;