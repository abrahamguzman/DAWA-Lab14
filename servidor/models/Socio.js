const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

function generateCodigo() {
    // Generar un código único basado en la fecha y hora actual
    const date = new Date();
    const timestamp = date.getTime(); // Obtener el timestamp en milisegundos
    const randomDigits = Math.floor(Math.random() * 1000); // Generar dígitos aleatorios
  
    // Concatenar el timestamp y los dígitos aleatorios para formar el código
    const codigo = `CODE-${timestamp}-${randomDigits}`;
  
    return codigo;
  }

const SocioSchema = new Schema({
    codigo: {
        type: String,
        default: function () {
          // Generar código automático aquí
          return generateCodigo(); // Función que genera el código
        },
        required: true,
      },
    nombre: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    directores_favoritos: {
        type: String,
        require: true
    },
    actores_favoritos: {
        type: String,
        require: false
    },
    generos_favoritos: {
        type: String,
        require: false
    },
});

module.exports = model('Socio', SocioSchema)