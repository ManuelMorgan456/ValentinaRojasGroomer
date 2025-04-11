const Usuario = require('../models/usuario');

// Crear usuario admin
const crearUsuario = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;

        // Verificar si ya existe ese correo
        const usuarioExistente = await Usuario.findOne({ correo });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El correo ya está registrado' });
        }

        // Crear usuario (sin encriptar manualmente)
        const nuevoUsuario = new Usuario({
            nombre,
            correo,
            password,  // 👈 aquí el middleware hará el hash automáticamente
            rol: 'admin',
        });

        await nuevoUsuario.save();

        res.status(201).json({ mensaje: 'Usuario administrador creado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear usuario' });
    }
};

const eliminarUsuarioAdmin = async (req, res) => {
    try {
        const usuarioSolicitante = req.usuario;

        if (usuarioSolicitante.rol !== 'administrador') {
            return res.status(403).json({ mensaje: 'Acceso denegado. Solo administradores pueden eliminar usuarios.' });
        }

        const idUsuarioAEliminar = req.params.id;

        if (idUsuarioAEliminar === usuarioSolicitante._id.toString()) {
            return res.status(400).json({ mensaje: 'No puedes eliminar tu propio usuario.' });
        }

        const usuarioEliminado = await Usuario.findByIdAndDelete(idUsuarioAEliminar);

        if (!usuarioEliminado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
        }

        res.status(200).json({ mensaje: 'Usuario eliminado correctamente.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al eliminar el usuario.' });
    }
};

module.exports = {
    crearUsuario,
    eliminarUsuarioAdmin,
};
