const express = require("express");
const app = express();

// Conectamos con las rutas de contacts
app.use("/", require("./contacts"));

// Exportamos app para poder utilizarla en app.js
module.exports = app;
