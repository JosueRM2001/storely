const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');

const router = express.Router();

// Ruta para crear un usuario
router.post('/users', createUser);

// Ruta para obtener todos los usuarios
router.get('/users', getUsers);

module.exports = router;


