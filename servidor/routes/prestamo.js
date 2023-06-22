const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamoController');

//api/prestamos
router.post('/', prestamoController.crearPrestamo);
router.get('/', prestamoController.obtenerPrestamos);
router.put('/:id', prestamoController.actualizarPrestamo);
router.get('/:id', prestamoController.verPrestamo);
router.delete('/:id', prestamoController.eliminarPrestamo);

module.exports = router;