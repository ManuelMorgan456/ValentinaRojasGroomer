const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
    beforeImage: {
        type: String,
        required: true
    },
    afterImage: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: ''
    },
    publicado: {
        type: Boolean,
        default: true
    },
    creadoPor: {
        type: String,
        default: 'Administración'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Slider', sliderSchema);
