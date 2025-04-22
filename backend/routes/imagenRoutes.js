const express = require('express');
const router = express.Router();
const {
    crearImagen,
    obtenerTodas,
    obtenerActivas,
    actualizarImagen,
    eliminarImagen
} = require('../controllers/imagenController');

const { proteger } = require('../middleware/authMiddleware');

//Rutas publicas
router.get('/publicas', obtenerActivas);

//Rutas privadas (Admin)
router.post('/', crearImagen); //proteger
router.get('/', obtenerTodas); //proteger
router.put('/:id', actualizarImagen); //proteger
router.delete('/:id', eliminarImagen); //proteger

module.exports = router;