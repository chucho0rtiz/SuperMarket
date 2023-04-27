import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

// Imports vistas creadas
import Main from './main';
import Inicio from './views/inicio';
import Productos from './views/Productos';
import Contactenos from './views/Contactenos';
import GestionarProductos from './views/GestionarProductos';
// imports externos
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Inicio />} />
          <Route path='Productos' element={<Productos />} />
          <Route path='Contactenos' element={<Contactenos />} />
          <Route path='GestionarProductos' element={<GestionarProductos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
