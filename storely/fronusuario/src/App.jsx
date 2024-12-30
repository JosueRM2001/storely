import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]); // Estado para almacenar usuarios

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // URL desde el .env

  // Función para obtener usuarios de la API
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) {
        throw new Error("Error al obtener usuarios");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Ejecutar fetchUsers al cargar el componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Gestión de Usuarios</h1>
      </header>
      <main>
        <UserForm fetchUsers={fetchUsers} />
        <UserList users={users} />
      </main>
    </div>
  );
}

export default App;
