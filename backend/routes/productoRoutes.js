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
router.post('/', crearProducto); //proteger
router.get('/', obtenerProductos); //proteger
router.get('/:id', obtenerProducto); //proteger
router.put('/:id', editarProducto); //proteger
router.delete('/:id', eliminarProducto); //proteger

module.exports = router;
