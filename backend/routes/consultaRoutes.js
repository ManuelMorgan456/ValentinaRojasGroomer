const express = require('express');
const router = express.Router();
const {
    crearConsulta,
    obtenerConsultas,
    obtenerConsulta,
    marcarComoLeido,
    eliminarConsulta
} = require('../controllers/consultaController');

const { proteger } = require('../middleware/authMiddleware');

// Pública
router.post('/', crearConsulta);

// Solo admin puede ver o gestionar
router.get('/', proteger, obtenerConsultas);
router.get('/:id', proteger, obtenerConsulta);
router.put('/:id/leido', proteger, marcarComoLeido);
router.delete('/:id', proteger, eliminarConsulta);

module.exports = router;
