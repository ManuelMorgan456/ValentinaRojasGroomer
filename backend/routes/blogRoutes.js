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
router.post('/', proteger, crearPost);
router.put('/:id', proteger, actualizarPost);
router.delete('/:id', proteger, eliminarPost);

// Rutas públicas
router.get('/', obtenerPosts);
router.get('/:id', obtenerPost);

module.exports = router;
