const express = require('express');
const router = express.Router();
const {
    crearPost,
    obtenerPosts,
    obtenerPost,
    actualizarPost,
    eliminarPost
} = require('../controllers/blogController');

const { proteger } = require('../middleware/authMiddleware');

// Rutas protegidas
router.post('/', crearPost); //proteger
router.put('/:id', actualizarPost); //proteger
router.delete('/:id', eliminarPost); //proteger

// Rutas públicas
router.get('/', obtenerPosts);
router.get('/:id', obtenerPost);

module.exports = router;
