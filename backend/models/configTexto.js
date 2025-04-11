const mongoose = require('mongoose');

const configTextoSchema = new mongoose.Schema({
    clave: { type: String, required: true, unique: true },
    valor: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('configTexto', configTextoSchema);
