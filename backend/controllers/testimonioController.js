const Testimonio = require('../models/testimonio');

// Crear nuevo testimonio (Público)
const crearTestimonio = async (req, res) => {
    try {
        const { nombre, mensaje, calificacion } = req.body;

        if (!nombre || !mensaje || calificacion == null) {
            return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
        }

        if (calificacion < 1 || calificacion > 5) {
            return res.status(400).json({ msg: 'La calificación debe estar entre 1 y 5' });
        }

        const nuevo = new Testimonio({ nombre, mensaje, calificacion });
        await nuevo.save();

        res.status(201).json({ msg: 'Testimonio enviado' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear testimonio' });
    }
};

// Obtener testimonios aprobados (Público)
const obtenerTestimoniosAprobados = async (req, res) => {
    try {
        const testimonios = await Testimonio.find({ aprobado: true }).sort({ createdAt: -1 });
        res.json(testimonios);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener testimonios' });
    }
};

// Obtener todos los testimonios (Admin)
const obtenerTodos = async (req, res) => {
    try {
        const testimonios = await Testimonio.find().sort({ createdAt: -1 });
        res.json(testimonios);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener testimonios' });
    }
};

// Actualizar testimonio (Admin)
const actualizarTestimonio = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonio = await Testimonio.findById(id);

        if (!testimonio) {
            return res.status(404).json({ msg: 'Testimonio no encontrado' });
        }

        const { aprobado, mensaje, nombre, calificacion } = req.body;

        if (calificacion !== undefined && (calificacion < 1 || calificacion > 5)) {
            return res.status(400).json({ msg: 'La calificación debe estar entre 1 y 5' });
        }

        testimonio.aprobado = aprobado ?? testimonio.aprobado;
        testimonio.mensaje = mensaje ?? testimonio.mensaje;
        testimonio.nombre = nombre ?? testimonio.nombre;
        testimonio.calificacion = calificacion ?? testimonio.calificacion;

        await testimonio.save();
        res.json({ msg: 'Testimonio actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar testimonio' });
    }
};

// Eliminar testimonio (Admin)
const eliminarTestimonio = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonio = await Testimonio.findById(id);

        if (!testimonio) {
            return res.status(404).json({ msg: 'Testimonio no encontrado' });
        }

        await testimonio.deleteOne();
        res.json({ msg: 'Testimonio eliminado con éxito' });
    } catch (error) {
        return res.status(500).json({ msg: 'Error al eliminar testimonio' });
    }
};

module.exports = {
    crearTestimonio,
    obtenerTestimoniosAprobados,
    obtenerTodos,
    actualizarTestimonio,
    eliminarTestimonio
};
