import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // Función para obtener usuarios
  const fetchUsers = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

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
