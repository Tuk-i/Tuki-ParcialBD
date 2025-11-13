const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Ejemplo: listar productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;