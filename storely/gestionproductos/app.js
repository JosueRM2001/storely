require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models'); // Importa la configuración de Sequelize
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/products', productRoutes);

// Sincronización con la base de datos
db.sequelize
  .sync()
  .then(() => {
    console.log('Base de datos sincronizada.');
  })
  .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err.message);
  });

// Puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
