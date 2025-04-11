const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginAdmin = async (req, res) => {
    const { correo, password } = req.body;

    try {
        // console.log('[LOGIN] Intentando iniciar sesión con correo:', correo);

        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            // console.warn('[LOGIN] Usuario no encontrado para correo:', correo);
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        // Usar el método del modelo para comparar contraseñas (más limpio)
        const passwordValida = await usuario.compararPassword(password);

        if (!passwordValida) {
            // console.warn('[LOGIN] Contraseña incorrecta para usuario:', usuario.correo);
            return res.status(401).json({ msg: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
            { id: usuario._id, nombre: usuario.nombre, rol: usuario.rol },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        // console.log('[LOGIN] Usuario autenticado correctamente:', usuario.correo);

        res.json({
            msg: 'Login exitoso',
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.rol,
            },
            token
        });

    } catch (error) {
        // console.error('[LOGIN] Error al iniciar sesión:', error);
        res.status(500).json({ msg: 'Error al iniciar sesión' });
    }
};

module.exports = {
    loginAdmin
};
