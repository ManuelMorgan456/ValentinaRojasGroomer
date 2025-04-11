const Imagen = require('../models/imagen');

// Crear nueva imagen
const crearImagen = async (req, res) => {
    try {
        const imagen = new Imagen(req.body);
        const nueva = await imagen.save();
        res.status(201).json(nueva);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear imagen' });
    }
};

// Obtener todas las imágenes
const obtenerTodas = async (req, res) => {
    try {
        const imagenes = await Imagen.find().sort({ createdAt: -1 });
        res.json(imagenes);
    } catch (error) {
        return res.status(500).json({ msg: 'Error al obtener imágenes' });
    }
};

// Obtener solo imágenes activas
const obtenerActivas = async (req, res) => {
    try {
        const imagenes = await Imagen.find({ activo: true });
        res.json(imagenes);
    } catch (error) {
        return res.status(500).json({ msg: 'Error al obtener imágenes activas' });
    }
};

// Actualizar imagen
const actualizarImagen = async (req, res) => {
    try {
        const imagenActualizada = await Imagen.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!imagenActualizada) return res.status(404).json({ msg: 'Imagen no encontrada' });
        res.json(imagenActualizada);
    } catch (error) {
        return res.status(500).json({ msg: 'Error al actualizar la imagen' });
    }
};

// Eliminar imagen
const eliminarImagen = async (req, res) => {
    try {
        const imagenEliminada = await Imagen.findByIdAndDelete(req.params.id);
        if (!imagenEliminada) return res.status(404).json({ msg: 'Imagen no encontrada' });
        res.json({ msg: 'Imagen eliminada' });
    } catch (error) {
        return res.status(500).json({ msg: 'Error al eliminar la imagen' });
    }
};

module.exports = {
    crearImagen,
    obtenerTodas,
    obtenerActivas,
    actualizarImagen,
    eliminarImagen
};
