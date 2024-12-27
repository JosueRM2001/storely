const db = require('../models');

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
};

// Crear un producto
exports.createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;
    const newProduct = await db.Product.create({ nombre, descripcion, precio, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto', error: error.message });
  }
};
