const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, default: 'admin' },
    tokenPassword: {
        type: String,
        default: null,
    },
    tokenExpira: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true
});

// Middleware para encriptar contraseña
usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Método para comparar contraseñas
usuarioSchema.methods.compararPassword = function (passwordIngresada) {
    return bcrypt.compare(passwordIngresada, this.password);
};

module.exports = mongoose.model('Usuario', usuarioSchema);
