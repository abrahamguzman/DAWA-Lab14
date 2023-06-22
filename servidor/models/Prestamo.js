const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');


const PrestamoSchema = new Schema({
    socio: {
        type: String,
        require: true
      },
    fecha: {
        type: Date,
        default: Date.now()
    },
    numero_pelicula: {
        type: Number,
        require: true
    }
});

module.exports = model('Prestamo', PrestamoSchema)