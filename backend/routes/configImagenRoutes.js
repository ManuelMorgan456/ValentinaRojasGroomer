const express = require('express');
const router = express.Router();
const {
    crearImagen,
    obtenerImagenes,
    editarImagen,
    eliminarImagen,
} = require('../controllers/configImagenController');
const { proteger } = require('../middleware/authMiddleware');

// Protegidas para admin 
router.get('/', obtenerImagenes); //proteger
router.post('/', crearImagen); //proteger
router.put('/:id', editarImagen); //proteger
router.delete('/:id', eliminarImagen); //proteger

module.exports = router;
