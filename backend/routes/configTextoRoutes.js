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
router.get('/', obtenerTextos); //proteger
router.post('/', crearTexto); //proteger
router.put('/:id', editarTexto); //proteger
router.delete('/:id', eliminarTexto); //proteger

module.exports = router;
