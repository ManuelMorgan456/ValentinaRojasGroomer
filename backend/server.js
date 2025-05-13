const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/upload');

dotenv.config();
const app = express();

// Middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ① SIRVE /uploads COMO ESTÁTICO       ← añade esto
app.use('/uploads', express.static('uploads'));
// ② RUTAS DE MULTER PARA SUBIR IMÁGENES ← y esto
app.use('/uploads', uploadRoutes);

// Conexión a Mongo
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('🟢 Conectado a MongoDB'))
    .catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('Api funcionando 🐾');
});

// Importar rutas
const servicioRoutes = require('./routes/servicioRoutes');
const testimonioRoutes = require('./routes/testimonioRoutes');
const imagenRoutes = require('./routes/imagenRoutes');
const blogRoutes = require('./routes/blogRoutes');
const consultaRoutes = require('./routes/consultaRoutes');
const productoRoutes = require('./routes/productoRoutes');
const galeriaRoutes = require('./routes/galeriaRoutes');
const configTextoRoutes = require('./routes/configTextoRoutes');
const configImagenRoutes = require('./routes/configImagenRoutes');
const configRedRoutes = require('./routes/configRedRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const loginRoutes = require('./routes/loginRoutes');
const recuperarRoutes = require('./routes/recuperarRoutes');
const sliderRoutes = require('./routes/sliderRoutes');

// Usar rutas de API
app.use('/api/servicios', servicioRoutes);
app.use('/api/testimonios', testimonioRoutes);
app.use('/api/imagenes', imagenRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/consultas', consultaRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/galeria', galeriaRoutes);
app.use('/api/config-texto', configTextoRoutes);
app.use('/api/config-imagen', configImagenRoutes);
app.use('/api/config-redes', configRedRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/password', recuperarRoutes);
app.use('/api/sliders', sliderRoutes);

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
