const jwt = require('jsonwebtoken');
const usuario = require('../models/usuario');

const proteger = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.usuario = await usuario.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            return res.status(401).json({ mensaje: 'Token invalido o expirado' });
        }
    } else {
        return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

};

const verificarToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Token inválido' });
    }
};

module.exports = {
    proteger,
    verificarToken
};