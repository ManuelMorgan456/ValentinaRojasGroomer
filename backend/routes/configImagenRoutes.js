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
router.get('/', proteger, obtenerImagenes);
router.post('/', proteger, crearImagen);
router.put('/:id', proteger, editarImagen);
router.delete('/:id', proteger, eliminarImagen);

module.exports = router;
