import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/add-product">Agregar Producto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
