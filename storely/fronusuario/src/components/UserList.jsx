import React from 'react';

function UserList({ users }) {
  return (
    <section>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.nombre} ({user.email}) - Rol: {user.rol}
            </li>
          ))
        ) : (
          <p>No hay usuarios registrados.</p>
        )}
      </ul>
    </section>
  );
}

export default UserList;
