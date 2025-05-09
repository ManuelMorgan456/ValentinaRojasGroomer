const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configuración de almacenamiento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // asegúrate que esta carpeta exista
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Ruta POST para subir imagen
router.post('/', upload.single('imagen'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No se subió ningún archivo.' });
    }
    res.json({
        mensaje: 'Imagen subida exitosamente',
        url: '/uploads/' + req.file.filename
    });
});

module.exports = router;

