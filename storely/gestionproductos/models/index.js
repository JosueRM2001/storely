const { Sequelize } = require('sequelize');

// Configuración de conexión
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Exportar la instancia
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.Product = require('./product')(sequelize, Sequelize);

module.exports = db;

