const Usuario = require('../models/usuario');
const crypto = require('crypto');
const enviarCorreo = require('../helpers/enviarCorreo');

const solicitarToken = async (req, res) => {
    try {
        const { correo } = req.body;

        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(404).json({ msg: 'El usuario no existe' });
        }

        // Generar token
        const token = crypto.randomBytes(20).toString('hex');
        usuario.tokenPassword = token;
        usuario.tokenExpira = Date.now() + 3600000; // 1 hora

        await usuario.save();

        // Enviar correo
        await enviarCorreo({
            correo: usuario.correo,
            nombre: usuario.nombre,
            token
        });

        res.json({ msg: 'Hemos enviado un email con las instrucciones' });
    } catch (error) {
        console.error('Error al solicitar token:', error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

const comprobarToken = async (req, res) => {
    try {
        const { token } = req.params;

        const usuario = await Usuario.findOne({
            tokenPassword: token,
            tokenExpira: { $gt: Date.now() }
        });

        if (!usuario) {
            return res.status(400).json({ msg: 'Token no válido o expirado' });
        }

        res.json({ msg: 'Token válido' });
    } catch (error) {
        console.error('Error al comprobar token:', error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

const nuevaPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        const usuario = await Usuario.findOne({
            tokenPassword: token,
            tokenExpira: { $gt: Date.now() }
        });

        if (!usuario) {
            return res.status(400).json({ msg: 'Token inválido o expirado' });
        }

        usuario.password = password; // El modelo debe tener middleware para hashear
        usuario.tokenPassword = null;
        usuario.tokenExpira = null;

        await usuario.save();

        res.json({ msg: 'Contraseña restablecida correctamente' });
    } catch (error) {
        console.error('Error al restablecer contraseña:', error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

module.exports = {
    solicitarToken,
    comprobarToken,
    nuevaPassword
};
