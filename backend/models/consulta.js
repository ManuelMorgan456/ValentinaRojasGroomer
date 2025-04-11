const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        default: ''
    },
    mensaje: {
        type: String,
        required: true
    },
    leido: {
        type: Boolean,
        default: false
    },
    fechaEnvio: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('consulta', consultaSchema);
