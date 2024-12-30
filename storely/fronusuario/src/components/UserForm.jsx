import React, { useState } from "react";

function UserForm({ fetchUsers }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "user",
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // URL desde el .env

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Usuario creado con éxito");
        setFormData({ nombre: "", email: "", password: "", rol: "user" });
        fetchUsers(); // Actualizar lista
      } else {
        alert("Error al crear usuario");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
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
