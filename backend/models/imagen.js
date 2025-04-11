const mongoose = require('mongoose');

const imagenSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ['portada', 'galeria', 'antes-despues'],
        required: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    activo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Imagen', imagenSchema);