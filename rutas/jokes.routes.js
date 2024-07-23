const express = require('express');
const router = express.Router();
const jokesController = require('../controladores/jokes.controller');

router.get('/', jokesController.obtenerTodosLosChistes);
router.get('/:id', jokesController.obtenerUnChiste);
router.post('/', jokesController.crearChiste);
router.put('/:id', jokesController.actualizarChiste);
router.delete('/:id', jokesController.eliminarChiste);

module.exports = router;
