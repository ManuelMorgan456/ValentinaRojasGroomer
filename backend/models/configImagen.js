const mongoose = require('mongoose');

const configImagenSchema = new mongoose.Schema({
    clave: { type: String, required: true, unique: true }, // Ej: logoPrincipal, bannerHome
    url: { type: String, required: true }, // URL o ruta de la imagen
}, { timestamps: true });

module.exports = mongoose.model('configImagen', configImagenSchema);
