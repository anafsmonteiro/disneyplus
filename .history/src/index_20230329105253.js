import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './componentes/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './componentes/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
<Route path='/' element={<App/>}/>
<Route path='/menu' element={<Menu/>}/>
<Route path='/download' element={<div className='download-page'><a href='https://www.disneyplus.com/login' className='link-download-page'>Faça o login no Disney+</a></div>}/>
  </Routes>
  <Route to='/search' element={<div className='download-page'><a href='https://www.disneyplus.com/login' className='link-download-page'>Faça o login no Disney+</a></div>}</
  <Footer/>
  </BrowserRouter>
);


