import React, { useState } from 'react';

function UserForm({ fetchUsers }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    rol: 'user',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Usuario creado con éxito');
        setFormData({ nombre: '', email: '', password: '', rol: 'user' });
        fetchUsers();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  };

  return (
    <section>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Rol:
          <select name="rol" value={formData.rol} onChange={handleChange}>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <button type="submit">Crear Usuario</button>
      </form>
    </section>
  );
}

export default UserForm;
