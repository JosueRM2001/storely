const sequelize = require('../config/database'); // Cambia la ruta según tu archivo de configuración
const { DataTypes } = require('sequelize');

// Define el modelo basado en tu tabla existente
const User = sequelize.define('User', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
  },
}, {
  tableName: 'Users', // Asegúrate de que coincida con el nombre exacto de tu tabla
  timestamps: true,  // Para que maneje createdAt y updatedAt automáticamente
});

(async () => {
  try {
    // Conecta a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');

    // Sincroniza el modelo sin borrar la tabla existente
    await sequelize.sync({ alter: true });
    console.log('La tabla Users está sincronizada.');

    // Crea un nuevo usuario
    const newUser = await User.create({
      nombre: 'UsuarioPrueba',
      email: 'usuario.prueba@example.com',
      password: '123456',
      rol: 'user', // Cambia a 'admin' si quieres crear un administrador
    });

    console.log('Usuario creado:', newUser.toJSON());
  } catch (error) {
    console.error('Error al trabajar con la base de datos:', error);
  } finally {
    // Cierra la conexión
    await sequelize.close();
  }
})();



