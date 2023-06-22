const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

//api/peliculas
router.post('/', peliculaController.crearPelicula);
router.get('/', peliculaController.obtenerPeliculas);
router.put('/:id', peliculaController.actualizarPelicula);
router.get('/:id', peliculaController.verPelicula);
router.delete('/:id', peliculaController.eliminarPelicula);

module.exports = router;