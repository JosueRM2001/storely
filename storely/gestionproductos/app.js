require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models'); // Importa el modelo

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Importa rutas
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Sincroniza la base de datos y arranca el servidor
const PORT = process.env.PORT || 5000;
db.sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada.');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
