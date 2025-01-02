const express = require('express');
const sequelize = require('./config/database');
const pedidoRoutes = require('./routes/pedidoRoutes');

// Inicializar la aplicación
const app = express();
app.use(express.json());

// Conectar a la base de datos
sequelize.authenticate()
  .then(() => console.log('Base de datos conectada correctamente.'))
  .catch(error => console.error('Error al conectar a la base de datos:', error));

// Sincronizar los modelos
sequelize.sync({ alter: true })
  .then(() => console.log('Modelos sincronizados.'))
  .catch(error => console.error('Error al sincronizar modelos:', error));

// Rutas
app.use('/api', pedidoRoutes);

// Iniciar el servidor
const PORT = 3001; // Usa un puerto diferente para este microservicio
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
