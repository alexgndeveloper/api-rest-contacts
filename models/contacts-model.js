const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definimos el Modelo Contacto
const contactSchema = new Schema(
  {
    name: { type: String, required: [true, 'El nombre de la persona es obligatorio'] },
    surname: { type: String, required: [true, 'El apellido de la persona es obligatorio'] },
    phone: { type: String, required: false },
    cellphone: { type: String, required: [true, 'El número de teléfono es obligatorio'] },
    email: { type: String, required: false },
    address: [
      {
        direction: { type: String, required: [true , 'La dirección es obligatoria'] },
        number: { type: Number, required: [true , 'El número es obligatorio'] },
        floor: { type: String, required: [true , 'El piso es obligatorio'] },
        province: { type: String, required: [true , 'La provincia es obligatoria'] }
      }
    ]
  },
  {
    versionKey: false
  }
);


// Exportamos el Modelo Contacto
module.exports = mongoose.model('Contact', contactSchema);