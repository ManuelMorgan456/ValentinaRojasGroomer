const express = require('express');
const router = express.Router();
const { crearUsuario, eliminarUsuarioAdmin } = require('../controllers/usuarioController');
const cambiarPassword = require('../controllers/cambiarPasswordController');
const { verificarToken } = require('../middleware/authMiddleware');

// Crear usuario admin
router.post('/crear', crearUsuario);
router.put('/cambiar-password', verificarToken, cambiarPassword);
router.delete('/eliminar/:id', verificarToken, eliminarUsuarioAdmin);


module.exports = router;
