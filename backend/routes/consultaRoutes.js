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
router.get('/', obtenerConsultas); //proteger
router.get('/:id', obtenerConsulta); //proteger
router.put('/:id/leido', marcarComoLeido); //proteger
router.delete('/:id', eliminarConsulta); //proteger

module.exports = router;
