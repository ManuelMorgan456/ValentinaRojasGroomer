const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

const cambiarPassword = async (req, res) => {
  const { passwordActual, nuevaPassword } = req.body;
  const usuarioId = req.usuario.id;

  try {
    const usuarioEncontrado = await Usuario.findById(usuarioId);
    if (!usuarioEncontrado) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const passwordValida = await bcrypt.compare(passwordActual, usuarioEncontrado.password);
    if (!passwordValida) {
      return res.status(401).json({ msg: 'La contraseña actual es incorrecta' });
    }

    const salt = await bcrypt.genSalt(10);
    usuarioEncontrado.password = await bcrypt.hash(nuevaPassword, salt);
    await usuarioEncontrado.save();

    res.json({ msg: 'Contraseña actualizada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al cambiar la contraseña' });
  }
};

module.exports = cambiarPassword;

