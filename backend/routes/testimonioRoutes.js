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
router.get('/todos', obtenerTodos); //proteger
router.put('/:id', actualizarTestimonio); //proteger
router.delete('/:id', eliminarTestimonio); //proteger

module.exports = router;