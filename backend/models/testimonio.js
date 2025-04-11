const mongoose = require('mongoose');

const testimonioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        mensaje: {
            type: String,
            required: true,
            trim: true,
        },
        calificacion: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        aprobado: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('testimonio', testimonioSchema);