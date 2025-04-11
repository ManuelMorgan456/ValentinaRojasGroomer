const express = require('express');
const router = express.Router();
const {
    crearTestimonio,
    obtenerTestimoniosAprobados,
    obtenerTodos,
    actualizarTestimonio,
    eliminarTestimonio,
} = require('../controllers/testimonioController');
const { proteger } = require('../middleware/authMiddleware')

//Publico
router.post('/', crearTestimonio);
router.get('/', obtenerTestimoniosAprobados);

//Admin
router.get('/todos', proteger, obtenerTodos);
router.put('/:id', proteger, actualizarTestimonio);
router.delete('/:id', proteger, eliminarTestimonio);

module.exports = router;