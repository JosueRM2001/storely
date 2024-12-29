const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Ruta hacia las rutas de usuario

app.use(express.json()); // Middleware para procesar JSON

// Configuración de las rutas
app.use('/api', userRoutes);

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


