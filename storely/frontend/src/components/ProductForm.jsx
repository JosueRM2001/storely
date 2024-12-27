import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/products', product)
      .then(() => {
        alert('Producto agregado');
        setProduct({ nombre: '', descripcion: '', precio: '', stock: '' });
      })
      .catch((error) => console.error('Error al agregar producto:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <input
        type="text"
        name="nombre"
        value={product.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <textarea
        name="descripcion"
        value={product.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
      ></textarea>
      <input
        type="number"
        name="precio"
        value={product.precio}
        onChange={handleChange}
        placeholder="Precio"
        required
      />
      <input
        type="number"
        name="stock"
        value={product.stock}
        onChange={handleChange}
        placeholder="Stock"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ProductForm;
