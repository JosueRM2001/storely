const User = require('../models/User');

// Crear un usuario
const createUser = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    // Crear el usuario en la base de datos
    const newUser = await User.create({ nombre, email, password, rol });
    res.status(201).json({ message: 'Usuario creado con éxito', user: newUser });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error al crear usuario', error: error.message });
  }
};

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    // Obtener todos los usuarios
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};


