const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use('/api', userRoutes);

// Sincronización con la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');

    // Sincronizar los modelos con la base de datos
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados.');

    // Iniciar el servidor
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();


