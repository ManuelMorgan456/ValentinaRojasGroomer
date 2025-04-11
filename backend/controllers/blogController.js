const Blog = require('../models/blog');

// Crear
const crearPost = async (req, res) => {
    try {
        const nuevoPost = new Blog(req.body);
        await nuevoPost.save();
        res.status(201).json(nuevoPost);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear el post' });
    }
};

// Obtener todos
const obtenerPosts = async (req, res) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener posts' });
    }
};

// Obtener uno
const obtenerPost = async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: 'Post no encontrado' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener el post' });
    }
};

// Actualizar
const actualizarPost = async (req, res) => {
    try {
        const postActualizado = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!postActualizado) return res.status(404).json({ msg: 'Post no encontrado' });
        res.json(postActualizado);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el post' });
    }
};

// Eliminar
const eliminarPost = async (req, res) => {
    try {
        const postEliminado = await Blog.findByIdAndDelete(req.params.id);
        if (!postEliminado) return res.status(404).json({ msg: 'Post no encontrado' });
        res.json({ msg: 'Post eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el post' });
    }
};

module.exports = {
    crearPost,
    obtenerPosts,
    obtenerPost,
    actualizarPost,
    eliminarPost
};
