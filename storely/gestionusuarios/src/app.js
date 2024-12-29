const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/database');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta base (para manejar solicitudes a '/')
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API!');
});

// Rutas de usuarios
app.use('/users', userRoutes);

// Conexión a la base de datos
db.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida con éxito.'))
  .catch((error) => console.error('Error al conectar con la base de datos:', error));

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
