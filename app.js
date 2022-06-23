const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Asignamos Express y todas sus funcionalidades a la contaste app
const app = express();
// Puerto de conexion de la API
const port = process.env.PORT || 3000;

// La aplicacion procesa peticiones de tipo "x-www-form-urlencoded"
app.use(bodyParser.urlencoded({ extended: false }));
// Las parsea a "aplicación/json"
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('./routes/index'));

// Conexion con MongoDB "api" es la Base de datos
mongoose.connect('mongodb://127.0.0.1:27017/api', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB conexion a la base de datos establecida...'))
  .catch((error) => console.log(`Incapaz de conectarse a MongoDB: ${error.message}`));

// El servidor va a estar en el puerto 3000 y cuando encianda nos muestra por consola que se ha iniciado.
app.listen(port, () => console.log(`API REST corriendo en http://localhost:${port}`));
