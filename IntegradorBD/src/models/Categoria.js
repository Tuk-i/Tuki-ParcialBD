const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre de la categoría es obligatorio.'],
    trim: true,
    unique: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  urlImagen: {
    type: String,
    trim: true
  },
  eliminado: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Categoria', categoriaSchema);