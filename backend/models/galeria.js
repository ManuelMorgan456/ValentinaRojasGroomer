const mongoose = require('mongoose');

const galeriaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String, // URL o nombre de archivo
        required: true
    },
    portada: {
        type: Boolean,
        default: false // true si va en el slider principal
    },
    activo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('galeria', galeriaSchema);
