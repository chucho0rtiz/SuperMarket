import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Imports vistas creadas
import Inicio from './views/inicio';
import Productos from './views/Productos';
import Contactenos from './views/Contactenos';
import GestionarProductos from './views/GestionarProductos';

// imports externos
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Rutas/URLs
const router = createBrowserRouter([
  {
    path: "/SuperMarket",
    element: <Inicio />
  },
  {
    path: "/Productos",
    element: <Productos />
  },
  {
    path: "/Contactenos",
    element: <Contactenos />
  },
  {
    path: "/GestionarProductos",
    element: <GestionarProductos />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
