const User = require('../models/userModel'); // Asegúrate de que la ruta sea correcta

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Busca todos los usuarios en la base de datos
    res.status(200).json(users); // Devuelve los usuarios como JSON
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body; // Datos desde el cuerpo de la solicitud
    const newUser = await User.create({ nombre, email, password, rol });
    res.status(201).json(newUser); // Devuelve el usuario creado
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error al crear usuario', error });
  }
};

module.exports = { getAllUsers, createUser };
