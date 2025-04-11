const express = require('express');
const router = express.Router();
const {
    solicitarToken,
    comprobarToken,
    nuevaPassword
} = require('../controllers/recuperarController');

router.post('/solicitar', solicitarToken);
router.get('/confirmar/:token', comprobarToken);
router.post('/resetear/:token', nuevaPassword);

module.exports = router;
