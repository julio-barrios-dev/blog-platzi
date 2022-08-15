import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Users from './components/Users';
import Publicaciones from './components/Publicaciones';
import Tareas from './components/Tareas';
import TareasGuardar from './components/Tareas/Guardar';


function App(props) {

  return (
    <BrowserRouter>
      <Menu />
      <div className='Margin'>
        <Routes>
          <Route path='blog-platzi/' element={<Users/>}/>
          <Route path='blog-platzi/task' element={<Tareas />}/>
          <Route path='blog-platzi/publicaciones/:key' element={<Publicaciones />}/>
          <Route path='blog-platzi/tareas/guardar' element={<TareasGuardar />}/>
          <Route path='blog-platzi/task/save/:user_id/:task' element={<TareasGuardar />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;