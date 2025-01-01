const express = require('express');
const sequelize = require('./config/database'); // Importa tu archivo de configuración

const app = express();
app.use(express.json());

// Conectar a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Base de datos conectada correctamente.');
    await sequelize.sync({ alter: true }); // Sincronizar modelos con la base de datos
    console.log('Modelos sincronizados.');
  } catch (error) {
    console.error('Error al conectar/sincronizar la base de datos:', error.message);
  }
})();

// Rutas del servidor
const userRoutes = require('./routes/userRoutes'); // Cambia el nombre si tienes otro archivo
app.use('/api', userRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
