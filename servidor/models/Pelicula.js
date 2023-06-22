const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const PeliculaSchema = new Schema({
    numero: {
        type: Number,
        required: true,
      },
    titulo: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    actores: {
        type: String,
        require: true
    }
});

module.exports = model('Pelicula', PeliculaSchema)