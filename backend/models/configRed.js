const mongoose = require('mongoose');

const configRedSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, // Ej: Instagram, Facebook, WhatsApp, TikTok
    url: { type: String, required: true },    // Link a la red
    icono: { type: String },                  // (Opcional) clase o ruta del ícono
}, { timestamps: true });

module.exports = mongoose.model('configRed', configRedSchema);
