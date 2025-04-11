const express = require('express');
const router = express.Router();
const {
    crearProducto,
    obtenerProductos,
    obtenerProductosActivos,
    obtenerProducto,
    editarProducto,
    eliminarProducto
} = require('../controllers/productoController');

const { proteger } = require('../middleware/authMiddleware');

// Público
router.get('/activos', obtenerProductosActivos);

// Admin
router.post('/', proteger, crearProducto);
router.get('/', proteger, obtenerProductos);
router.get('/:id', proteger, obtenerProducto);
router.put('/:id', proteger, editarProducto);
router.delete('/:id', proteger, eliminarProducto);

module.exports = router;
