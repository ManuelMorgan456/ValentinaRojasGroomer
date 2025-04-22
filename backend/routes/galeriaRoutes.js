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
router.post('/', crearImagen); //proteger
router.get('/', obtenerGaleria); //proteger
router.get('/:id', obtenerImagen);  //proteger
router.put('/:id', editarImagen); //proteger
router.delete('/:id', eliminarImagen); //proteger

module.exports = router;
