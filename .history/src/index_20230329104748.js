import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './componentes/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
<Route path='/' element={<App/>}/>
<Route path='/menu' element={<Menu/>}/>
<Route path='/download' element={<div className='download-page'><a href='https://www.disneyplus.com/login' className='link-download-page'>Faça o Login no site oficial da Disney+</a></div>}/>
  </Routes>
  </BrowserRouter>
);


