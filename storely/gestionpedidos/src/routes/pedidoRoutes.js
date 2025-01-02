const express = require('express');
const Pedido = require('../models/Pedido');

const router = express.Router();

// Crear un nuevo pedido
router.post('/pedidos', async (req, res) => {
  try {
    const { usuario_id, producto, cantidad, precio, estado } = req.body;
    const nuevoPedido = await Pedido.create({
      usuario_id,
      producto,
      cantidad,
      precio,
      estado,
    });
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el pedido', error });
  }
});

// Obtener todos los pedidos
router.get('/pedidos', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos', error });
  }
});

// Obtener un pedido por ID
router.get('/pedidos/:id', async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el pedido', error });
  }
});

module.exports = router;
