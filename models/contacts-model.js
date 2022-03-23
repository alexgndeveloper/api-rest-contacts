const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definimos el Modelo Contacto
const contactSchema = new Schema(
  {
    name: { type: String, required: [true, 'El nombre de la persona es obligatorio'] },
    phone: { type: String, required: false },
    cellphone: { type: String, required: [true, 'El número de teléfono es obligatorio'] },
    email: { type: String, required: false },
    address: { type: String, required: false },
  },
  {
    versionKey: false
  }
);

// Exportamos el Modelo Contacto
module.exports = mongoose.model('Contact', contactSchema);