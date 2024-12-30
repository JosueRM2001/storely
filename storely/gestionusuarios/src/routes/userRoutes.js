const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

// Endpoint para crear un usuario
router.post('/users', createUser);

module.exports = router;


