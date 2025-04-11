const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    imagen: {
        type: String, // URL o path local
        default: ''
    },
    creadoPor: {
        type: String,
        default: 'Administración'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    etiquetas: [String],
    publicado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('blog', blogSchema);
