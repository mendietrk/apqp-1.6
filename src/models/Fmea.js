const mongoose = require('mongoose');

const FmeaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  modoFalla: { type: String, required: true },
  efecto: { type: String, required: true },
  causa: { type: String, required: true },
  severidad: { type: Number, required: true },
  ocurrencia: { type: Number, required: true },
  deteccion: { type: Number, required: true }
});

module.exports = mongoose.model('Fmea', FmeaSchema);