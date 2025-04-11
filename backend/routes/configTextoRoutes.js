const express = require('express');
const router = express.Router();
const {
    crearTexto,
    obtenerTextos,
    editarTexto,
    eliminarTexto,
} = require('../controllers/configTextoController');
const { proteger } = require('../middleware/authMiddleware');

// Solo accesibles para admin logueado
router.get('/', proteger, obtenerTextos);
router.post('/', proteger, crearTexto);
router.put('/:id', proteger, editarTexto);
router.delete('/:id', proteger, eliminarTexto);

module.exports = router;
