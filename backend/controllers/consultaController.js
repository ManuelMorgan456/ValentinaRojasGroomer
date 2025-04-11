const Consulta = require('../models/consulta');

// Crear consulta
const crearConsulta = async (req, res) => {
    try {
        const nuevaConsulta = new Consulta(req.body);
        await nuevaConsulta.save();
        res.status(201).json(nuevaConsulta);
    } catch (error) {
        res.status(500).json({ msg: 'Error al enviar consulta' });
    }
};

// Obtener todas las consultas (Admin)
const obtenerConsultas = async (req, res) => {
    try {
        const consultas = await Consulta.find().sort({ createdAt: -1 });
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener las consultas' });
    }
};

// Obtener una consulta
const obtenerConsulta = async (req, res) => {
    try {
        const consultaEncontrada = await Consulta.findById(req.params.id);
        if (!consultaEncontrada) return res.status(404).json({ msg: 'Consulta no encontrada' });
        res.json(consultaEncontrada);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener la consulta' });
    }
};

// Marcar como leída
const marcarComoLeido = async (req, res) => {
    try {
        const consultaActualizada = await Consulta.findByIdAndUpdate(
            req.params.id,
            { leido: true },
            { new: true }
        );
        if (!consultaActualizada) return res.status(404).json({ msg: 'Consulta no encontrada' });
        res.json(consultaActualizada);
    } catch (error) {
        res.status(500).json({ msg: 'Error al marcar como leído' });
    }
};

// Eliminar consulta
const eliminarConsulta = async (req, res) => {
    try {
        const consultaEliminada = await Consulta.findByIdAndDelete(req.params.id);
        if (!consultaEliminada) return res.status(404).json({ msg: 'Consulta no encontrada' });
        res.json({ msg: 'Consulta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar la consulta' });
    }
};

module.exports = {
    crearConsulta,
    obtenerConsultas,
    obtenerConsulta,
    marcarComoLeido,
    eliminarConsulta
};
