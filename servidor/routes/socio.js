const express = require('express');
const router = express.Router();
const socioController = require('../controllers/socioController');

//api/productos
router.post('/', socioController.crearSocio);
router.get('/', socioController.obtenerSocios);
router.put('/:id', socioController.actualizarSocio);
router.get('/:id', socioController.verSocio);
router.delete('/:id', socioController.eliminarSocio);

module.exports = router;