const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio.'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio.'],
    unique: true,
    trim: true
  },
  direccion: {
    type: String,
    trim: true
  },
  telefono: {
    type: String,
    trim: true
  },
  rol: {
    type: String,
    enum: ['cliente', 'administrador'],
    default: 'cliente'
  }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);