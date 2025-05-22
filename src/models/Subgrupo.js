const mongoose = require('mongoose');

const SubgrupoSchema = new mongoose.Schema({
  muestras: {
    type: [Number],
    validate: [array => array.length === 5, 'Debe haber exactamente 5 muestras']
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subgrupo', SubgrupoSchema);
