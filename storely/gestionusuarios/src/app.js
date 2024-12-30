const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

// Inicializar la aplicación
const app = express();
app.use(express.json());

// Conectar a la base de datos
sequelize.authenticate()
  .then(() => console.log('Base de datos conectada correctamente.'))
  .catch(error => console.error('Error al conectar a la base de datos:', error));

// Sincronizar los modelos con la base de datos
sequelize.sync({ alter: true })
  .then(() => console.log('Modelos sincronizados.'))
  .catch(error => console.error('Error al sincronizar modelos:', error));

// Usar las rutas
app.use('/api', userRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
