const ConfigRed = require('../models/configRed');

// Crear red social
const crearRed = async (req, res) => {
    try {
        const red = new ConfigRed(req.body);
        await red.save();
        res.status(201).json(red);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear red social' });
    }
};

// Obtener todas las redes
const obtenerRedes = async (req, res) => {
    try {
        const redes = await ConfigRed.find();
        res.json(redes);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener redes sociales' });
    }
};

// Editar red
const editarRed = async (req, res) => {
    try {
        const red = await ConfigRed.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(red);
    } catch (error) {
        res.status(500).json({ msg: 'Error al editar red social' });
    }
};

// Eliminar red
const eliminarRed = async (req, res) => {
    try {
        await ConfigRed.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Red social eliminada' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar red social' });
    }
};

module.exports = {
    crearRed,
    obtenerRedes,
    editarRed,
    eliminarRed,
};
