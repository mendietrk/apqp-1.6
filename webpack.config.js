const path = require('path');

module.exports = {
  entry: './src/routes/index.js',  // Archivo de entrada principal
  output: {
    filename: 'bundle.js',   // Archivo de salida con todo el código unido
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  // Puedes usar 'production' para optimizar el código
};
 