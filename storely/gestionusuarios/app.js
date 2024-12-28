const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

// Puerto
const PORT = process.env.PORT || 5001;

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('Gestión de Usuarios funcionando correctamente');
});

// Conexión y sincronización con la base de datos
sequelize
  .sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar con la base de datos:', error);
  });
