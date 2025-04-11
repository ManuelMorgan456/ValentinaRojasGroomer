const express = require('express');
const router = express.Router();
const {
    crearRed,
    obtenerRedes,
    editarRed,
    eliminarRed,
} = require('../controllers/configRedController');
const { proteger } = require('../middleware/authMiddleware');

// Protegido para admins
router.get('/', proteger, obtenerRedes);
router.post('/', proteger, crearRed);
router.put('/:id', proteger, editarRed);
router.delete('/:id', proteger, eliminarRed);

module.exports = router;
