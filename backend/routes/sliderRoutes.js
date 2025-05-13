const express = require('express');
const router = express.Router();
const {
    crearSlider,
    obtenerSliders,
    obtenerSlider,
    actualizarSlider,
    eliminarSlider
} = require('../controllers/sliderController');

const { proteger } = require('../middleware/authMiddleware');

// Rutas protegidas
router.post('/', proteger, crearSlider);
router.put('/:id', proteger, actualizarSlider);
router.delete('/:id', proteger, eliminarSlider);

// Rutas públicas
router.get('/', obtenerSliders);
router.get('/:id', obtenerSlider);

module.exports = router;
