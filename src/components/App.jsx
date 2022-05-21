import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Publicaciones from './Publicaciones';
import Tareas from './Tareas';
import TareasGuardar from './Tareas/Guardar';


function App(props) {

  return (
    <BrowserRouter>
      <Menu />
      <div className='Margin'>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/task' element={<Tareas />}/>
          <Route path='/publicaciones/:key' element={<Publicaciones />}/>
          <Route path='/tareas/guardar' element={<TareasGuardar />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;