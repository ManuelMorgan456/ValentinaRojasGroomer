const Producto = require('../models/producto');

// Crear producto
const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear producto' });
    }
};

// Obtener todos los productos (Admin)
const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find().sort({ createdAt: -1 });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener productos' });
    }
};

// Obtener productos activos (Público)
const obtenerProductosActivos = async (req, res) => {
    try {
        const productos = await Producto.find({ activo: true });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener productos activos' });
    }
};

// Obtener un producto por ID
const obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({ msg: 'Producto no encontrado' });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener producto' });
    }
};

// Editar producto
const editarProducto = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoActualizado) return res.status(404).json({ msg: 'Producto no encontrado' });
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).json({ msg: 'Error al editar producto' });
    }
};

// Eliminar producto
const eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) return res.status(404).json({ msg: 'Producto no encontrado' });
        res.json({ msg: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar producto' });
    }
};

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductosActivos,
    obtenerProducto,
    editarProducto,
    eliminarProducto
};
