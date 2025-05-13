const Slider = require('../models/slider');

// Crear
const crearSlider = async (req, res) => {
    try {
        const nuevoSlider = new Slider(req.body);
        await nuevoSlider.save();
        res.status(201).json(nuevoSlider);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear el slider' });
    }
};

// Obtener todos
const obtenerSliders = async (req, res) => {
    try {
        const sliders = await Slider.find().sort({ createdAt: -1 });
        res.json(sliders);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener sliders' });
    }
};

// Obtener uno
const obtenerSlider = async (req, res) => {
    try {
        const slider = await Slider.findById(req.params.id);
        if (!slider) return res.status(404).json({ msg: 'Slider no encontrado' });
        res.json(slider);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener el slider' });
    }
};

// Actualizar
const actualizarSlider = async (req, res) => {
    try {
        const sliderActualizado = await Slider.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!sliderActualizado) return res.status(404).json({ msg: 'Slider no encontrado' });
        res.json(sliderActualizado);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el slider' });
    }
};

// Eliminar
const eliminarSlider = async (req, res) => {
    try {
        const eliminado = await Slider.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ msg: 'Slider no encontrado' });
        res.json({ msg: 'Slider eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el slider' });
    }
};

module.exports = {
    crearSlider,
    obtenerSliders,
    obtenerSlider,
    actualizarSlider,
    eliminarSlider
};
