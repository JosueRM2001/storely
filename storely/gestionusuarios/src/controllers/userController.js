const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { nombre, email, password, rol = 'user' } = req.body;

    // Validación de datos
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'El correo ya está registrado.' });
    }

    // Crear el usuario
    const newUser = await User.create({ nombre, email, password, rol });
    res.status(201).json({ message: 'Usuario creado exitosamente.', user: newUser });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error al crear usuario.', error: error.message });
  }
};

module.exports = { createUser };

