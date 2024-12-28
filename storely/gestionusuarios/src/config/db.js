const express = require('express');
const sequelize = require('./config/database'); // Cambia esto si tu archivo de configuración tiene otro nombre

const app = express();
const PORT = 6000;

app.use(express.json());

// Define tus rutas aquí
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida con éxito.'))
    .catch((error) => console.error('Error al conectar con la base de datos:', error));
