const Servicio = require('../models/servicio');

// Crear servicio
const crearServicio = async (req, res) => {
    try {
        const nuevo = new Servicio(req.body);
        await nuevo.save();
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear el servicio', error });
    }
};

// Obtener todos los servicios
const obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find().sort({ createdAt: -1 });
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener servicios' });
    }
};

// Obtener uno solo
const obtenerServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        if (!servicio) return res.status(404).json({ msg: 'Servicio no encontrado' });
        res.json(servicio);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener el servicio' });
    }
};

// Actualizar
const actualizarServicio = async (req, res) => {
    try {
        const actualizado = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ msg: 'Servicio no encontrado' });
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el servicio' });
    }
};

// Eliminar
const eliminarServicio = async (req, res) => {
    try {
        const eliminado = await Servicio.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ msg: 'Servicio no encontrado' });
        res.json({ msg: 'Servicio eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el servicio' });
    }
};

module.exports = {
    crearServicio,
    obtenerServicios,
    obtenerServicio,
    actualizarServicio,
    eliminarServicio
};
