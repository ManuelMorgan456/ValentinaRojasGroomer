const express = require('express');
const router = express.Router();
const {
    crearImagen,
    obtenerGaleria,
    obtenerGaleriaActiva,
    obtenerPortadas,
    obtenerImagen,
    editarImagen,
    eliminarImagen
} = require('../controllers/galeriaController');

const { proteger } = require('../middleware/authMiddleware');

// Público
router.get('/activas', obtenerGaleriaActiva);
router.get('/portadas', obtenerPortadas);

// Admin
router.post('/', proteger, crearImagen);
router.get('/', proteger, obtenerGaleria);
router.get('/:id', proteger, obtenerImagen);
router.put('/:id', proteger, editarImagen);
router.delete('/:id', proteger, eliminarImagen);

module.exports = router;
