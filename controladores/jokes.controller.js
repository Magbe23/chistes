const Joke = require('../modelos/jokes.model');

exports.obtenerTodosLosChistes = async (req, res) => {
    try {
        const chistes = await Joke.find();
        res.json(chistes);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.obtenerUnChiste = async (req, res) => {
    try {
        const chiste = await Joke.findById(req.params.id);
        res.json(chiste);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.crearChiste = async (req, res) => {
    const nuevoChiste = new Joke(req.body);
    try {
        const chisteGuardado = await nuevoChiste.save();
        res.status(201).json(chisteGuardado);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.actualizarChiste = async (req, res) => {
    try {
        const chisteActualizado = await Joke.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(chisteActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.eliminarChiste = async (req, res) => {
    try {
        await Joke.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Chiste eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
