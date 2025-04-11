const ConfigTexto = require('../models/configTexto');

// Crear texto
const crearTexto = async (req, res) => {
    try {
        const texto = new ConfigTexto(req.body);
        await texto.save();
        res.status(201).json(texto);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear texto' });
    }
};

// Obtener todos
const obtenerTextos = async (req, res) => {
    try {
        const textos = await ConfigTexto.find();
        res.json(textos);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener textos' });
    }
};

// Editar
const editarTexto = async (req, res) => {
    try {
        const texto = await ConfigTexto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(texto);
    } catch (error) {
        res.status(500).json({ msg: 'Error al editar texto' });
    }
};

// Eliminar
const eliminarTexto = async (req, res) => {
    try {
        await ConfigTexto.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Texto eliminado' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar texto' });
    }
};

module.exports = {
    crearTexto,
    obtenerTextos,
    editarTexto,
    eliminarTexto,
};
