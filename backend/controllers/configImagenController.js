const ConfigImagen = require('../models/configImagen');

// Crear imagen
const crearImagen = async (req, res) => {
    try {
        const imagen = new ConfigImagen(req.body);
        await imagen.save();
        res.status(201).json(imagen);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear imagen' });
    }
};

// Obtener todas
const obtenerImagenes = async (req, res) => {
    try {
        const imagenes = await ConfigImagen.find();
        res.json(imagenes);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener imágenes' });
    }
};

// Editar imagen
const editarImagen = async (req, res) => {
    try {
        const imagen = await ConfigImagen.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(imagen);
    } catch (error) {
        res.status(500).json({ msg: 'Error al editar imagen' });
    }
};

// Eliminar imagen
const eliminarImagen = async (req, res) => {
    try {
        await ConfigImagen.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Imagen eliminada' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar imagen' });
    }
};

module.exports = {
    crearImagen,
    obtenerImagenes,
    editarImagen,
    eliminarImagen,
};
