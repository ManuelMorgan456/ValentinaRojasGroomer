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
router.post('/', proteger, crearImagen);
router.get('/', proteger, obtenerTodas);
router.put('/:id', proteger, actualizarImagen);
router.delete('/:id', proteger, eliminarImagen);

module.exports = router;