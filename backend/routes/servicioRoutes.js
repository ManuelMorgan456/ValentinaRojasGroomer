const express = require('express');
const router = express.Router();
const {
    crearServicio,
    obtenerServicios,
    obtenerServicio,
    actualizarServicio,
    eliminarServicio
} = require('../controllers/servicioController');

const { proteger } = require('../middleware/authMiddleware');

//Publico
router.get('/', obtenerServicios);
router.get('/:id', obtenerServicio);


// Solo admin autenticado puede crear, editar o eliminar
router.post('/', proteger, crearServicio);
router.put('/:id', proteger, actualizarServicio);
router.delete('/:id', proteger, eliminarServicio);

module.exports = router;
