import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Publicaciones from './Publicaciones';

const Tareas = () => <div>Tareas</div>;

function App(props) {

  return (
    <BrowserRouter>
      <Menu />
      <div className='Margin'>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/task' element={<Tareas />}/>
          <Route path='/publicaciones/:key' element={<Publicaciones />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;