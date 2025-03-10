const express = require ('express');
const router = express.Router();
const Fmea = require('./../models/Fmea');
const mongoose = require ('mongoose');



// Ruta para mostrar la vista home.ejs
router.get('/', (req, res, next) =>
{
        res.render('home');
});
  
  router.post('/db/submit', (req, res) => {
    const bd1 = req.body.db1; 
    const URI ='mongodb+srv://' + bd1 +
      ':HHnOQn2B4iVtEdOU@cluster0.pgfsbij.mongodb.net/newfmea2?retryWrites=true&w=majority';
      console.log(bd1)
      mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => {
          console.log("Conexión exitosa a la base de datos");
        })
        .catch(error => {
          console.log("Error al conectar a la base de datos:", error);
        });
        res.redirect("/in");
    
  });
  
  
  
  // Rutas
  
  // Ruta principal: lista todos los análisis FMEA
  router.get('/in', async (req, res) => {
    const fmeas = await Fmea.find();
    res.render('index', { fmeas });
  });
  
  // Ruta para mostrar el formulario para crear un nuevo análisis
  router.get('/fmea/new', (req, res) => {
    res.render('new');
  });
  
  // Ruta para crear un nuevo análisis FMEA
  router.post('/fmea', async (req, res) => {
    await Fmea.create(req.body);
    res.redirect('/in');
  });
  
  // Ruta para mostrar el formulario de edición de un análisis
  router.get('/fmea/:id/edit', async (req, res) => {
    const fmea = await Fmea.findById(req.params.id);
    res.render('edit', { fmea });
  });
  
  // Ruta para actualizar un análisis FMEA
  router.put('/fmea/:id', async (req, res) => {
    await Fmea.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/in');
  });
  
  // Ruta para eliminar un análisis FMEA
  router.delete('/fmea/:id', async (req, res) => {
    await Fmea.findByIdAndDelete(req.params.id);
    res.redirect('/in');
  });

  module.exports = router