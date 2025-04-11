const Galeria = require('../models/galeria');

// Crear imagen
const crearImagen = async (req, res) => {
    try {
        const nuevaImagen = new Galeria(req.body);
        await nuevaImagen.save();
        res.status(201).json(nuevaImagen);
    } catch (error) {
        res.status(500).json({ msg: 'Error al subir imagen' });
    }
};

// Obtener todas las imágenes (Admin)
const obtenerGaleria = async (req, res) => {
    try {
        const imagenes = await Galeria.find().sort({ createdAt: -1 });
        res.json(imagenes);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener imágenes' });
    }
};

// Obtener solo las activas (Público)
const obtenerGaleriaActiva = async (req, res) => {
    try {
        const imagenes = await Galeria.find({ activo: true }).sort({ createdAt: -1 });
        res.json(imagenes);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener galería activa' });
    }
};

// Obtener portadas activas (para slider, home, etc.)
const obtenerPortadas = async (req, res) => {
    try {
        const imagenes = await Galeria.find({ portada: true, activo: true }).sort({ createdAt: -1 });
        res.json(imagenes);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener portadas' });
    }
};

// Obtener una imagen
const obtenerImagen = async (req, res) => {
    try {
        const imagen = await Galeria.findById(req.params.id);
        if (!imagen) return res.status(404).json({ msg: 'Imagen no encontrada' });
        res.json(imagen);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener imagen' });
    }
};

// Editar imagen
const editarImagen = async (req, res) => {
    try {
        const imagen = await Galeria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!imagen) return res.status(404).json({ msg: 'Imagen no encontrada' });
        res.json(imagen);
    } catch (error) {
        res.status(500).json({ msg: 'Error al editar imagen' });
    }
};

// Eliminar imagen
const eliminarImagen = async (req, res) => {
    try {
        const imagen = await Galeria.findByIdAndDelete(req.params.id);
        if (!imagen) return res.status(404).json({ msg: 'Imagen no encontrada' });
        res.json({ msg: 'Imagen eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar imagen' });
    }
};

module.exports = {
    crearImagen,
    obtenerGaleria,
    obtenerGaleriaActiva,
    obtenerPortadas,
    obtenerImagen,
    editarImagen,
    eliminarImagen
};
