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
router.get('/', obtenerRedes); //proteger
router.post('/', crearRed); //proteger
router.put('/:id', editarRed); //proteger
router.delete('/:id', eliminarRed); //proteger

module.exports = router;
