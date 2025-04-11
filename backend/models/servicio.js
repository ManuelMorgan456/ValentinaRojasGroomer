const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    duracion: {
        type: String, // Ej: "1 hora", "45 minutos"
        required: true
    },
    imagen: {
        type: String, // URL o nombre de archivo en la carpeta pública
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('servicio', servicioSchema);
